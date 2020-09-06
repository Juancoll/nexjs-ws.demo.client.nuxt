import { getResponseProp } from '@nuxtjs/auth-next/dist/utils'
import Token from '@nuxtjs/auth-next/dist/inc/token'
import RequestHandler from '@nuxtjs/auth-next/dist/inc/request-handler'
import { SchemeCheck, SchemeOptions, HTTPRequest, Auth } from '@nuxtjs/auth-next/dist/'
import BaseScheme from '@nuxtjs/auth-next/dist/schemes/_scheme'

import { wsapi } from '~/plugins/wsapi'

const DEFAULTS: SchemeOptions = {
    name: 'local',
    endpoints: {
        login: {
            url: '/api/auth/login',
            method: 'post'
        },
        logout: {
            url: '/api/auth/logout',
            method: 'post'
        },
        user: {
            url: '/api/auth/user',
            method: 'get'
        }
    },
    token: {
        property: 'token',
        type: 'Bearer',
        name: 'Authorization',
        maxAge: 1800,
        global: true,
        required: true,
        prefix: '_token.',
        expirationPrefix: '_token_expiration.'
    },
    user: {
        property: 'user',
        autoFetch: true
    },
    clientId: false,
    grantType: false,
    scope: false
}

export default class LocalScheme extends BaseScheme<typeof DEFAULTS> {
    public token: Token
    public requestHandler: RequestHandler

    constructor ($auth: Auth, options: typeof DEFAULTS, ...defaults: any[]) {
        super($auth, options, ...defaults, DEFAULTS)
        console.log('[scheme-ws-v2] constructor')
        // Initialize Token instance
        this.token = new Token(this, this.$auth.$storage)

        // Initialize Request Interceptor
        this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios)
    }

    _updateTokens (response: any) {
        if (this.options.token.required) {
            const token = getResponseProp(response, this.options.token.property)
            this.token.set(token)
        }
    }

    _initializeRequestInterceptor () {
        this.requestHandler.initializeRequestInterceptor()
    }

    check (checkStatus = false): SchemeCheck {
        const response = {
            valid: false,
            tokenExpired: false
        }

        // Sync token
        const token = this.token.sync()

        // Token is required but not available
        if (this.options.token.required && !token) {
            return response
        }

        // Check status wasn't enabled, let it pass
        if (!checkStatus) {
            response.valid = true
            return response
        }

        // Get status
        const tokenStatus = this.token.status()

        // Token has expired. Attempt `tokenCallback`
        if (tokenStatus.expired()) {
            response.tokenExpired = true
            return response
        }

        response.valid = true
        return response
    }

    async mounted ({
        tokenCallback = () => this.$auth.reset(),
        refreshTokenCallback = undefined
    } = {}): Promise<any> {
        console.log('[scheme-ws-v2] mounted')
        console.log('[scheme-ws-v2] mounted - is server = ', process.server)
        const { tokenExpired, refreshTokenExpired } = this.check(true)

        if (refreshTokenExpired && typeof refreshTokenCallback === 'function') {
            (refreshTokenCallback as unknown as Function)()
        } else if (tokenExpired && typeof tokenCallback === 'function') {
            tokenCallback()
        }

        // Initialize request interceptor
        this._initializeRequestInterceptor()

        // Fetch user once
        const tokenValue = this.token.get()
        if (!tokenValue) {
            console.log('[scheme-ws-v2] mounted - not auth')
        } else {
            console.log('[scheme-ws-v2] mounted - auth with token ', tokenValue)

            const strToken = (tokenValue as string).substr(7)
            this.token.set(strToken)

            if (!wsapi.ws.isConnected) {
                await wsapi.ws.connectAsync(
                    this.options.ws.url,
                    this.options.ws.path,
                    this.options.ws.nsp
                )
            }
            const response = await wsapi.auth.authenticate(strToken)
            this.$auth.setUser(response.user)
            if (process.server) {
                wsapi.ws.disconnect()
            }
        }
    }

    async login (endpoint:any) {
        // Make login request
        if (!wsapi.ws.isConnected) {
            await wsapi.ws.connectAsync(
                this.options.ws.url,
                this.options.ws.path,
                this.options.ws.nsp
            )
        }
        const response = await wsapi.auth.login(endpoint.data)

        // Update tokens
        this.token.set(response.token)

        // Initialize request interceptor if not initialized
        if (!this.requestHandler.interceptor) {
            this._initializeRequestInterceptor()
        }

        this.$auth.setUser(response.user)

        return response
    }

    async setUserToken (token:string) {
        console.log('[scheme-ws-v2] setUserToken', token)
        this.token.set(token)

        // Fetch user
        return this.fetchUser()
    }

    fetchUser (endpoint?:any) {
        console.log('[scheme-ws-v2] fetchUser', endpoint)
    }

    async logout (endpoint: HTTPRequest = {}) {
        console.log('[scheme-ws-v2] logout', endpoint)

        await wsapi.auth.logout()
        wsapi.ws.disconnect()

        // But reset regardless
        return this.$auth.reset()
    }

    reset ({ resetInterceptor = true } = {}) {
        this.$auth.setUser(false)
        this.token.reset()

        if (resetInterceptor) {
            this.requestHandler.reset()
        }
    }
}
