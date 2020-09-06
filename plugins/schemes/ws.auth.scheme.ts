import local from '@nuxtjs/auth-next/dist/schemes/local'
import { AxiosResponse } from 'axios'
import Auth from '@nuxtjs/auth-next/dist/core/auth'
import Token from '@nuxtjs/auth-next/dist/inc/token'
import { wsapi } from '~/plugins/wsapi'

export default class WsAuthScheme extends local {
    constructor ($auth: Auth, options: any, ...defaults:any[]) {
        super($auth, options, defaults)
        console.log('[scheme-ws] constructor')
        this.token = new Token(this, this.$auth.$storage)
    }

    async mounted () : Promise<any> {
        console.log('[scheme-ws] mounted')
        const tokenValue = this.token.get()
        if (!tokenValue) {
            console.log('[scheme-ws] mounted - not auth')
        } else {
            const strToken = (tokenValue as string).substr(7)
            console.log('[scheme-ws] mounted - auth with token ', strToken)
            if (!wsapi.ws.isConnected) {
                await wsapi.ws.connectAsync(
                    this.options.ws.url,
                    this.options.ws.path,
                    this.options.ws.nsp
                )
            }
            await wsapi.auth.authenticate(strToken)
        }
    }

    async login (endpoint: any): Promise<AxiosResponse<any>> {
        console.log('[scheme-ws] login', endpoint)
        const $auth = this.$auth as Auth

        if (!wsapi.ws.isConnected) {
            await wsapi.ws.connectAsync(
                this.options.ws.url,
                this.options.ws.path,
                this.options.ws.nsp
            )
        }
        const res = await wsapi.auth.login(endpoint.data)

        $auth.setUser(res.user)
        $auth.setUserToken(res.token)
        this.token.set(res.token)
        return {
            data: res,
            status: 200,
            statusText: 'ok'
        } as AxiosResponse
    }

    async fetchUser (endpoint: any): Promise<AxiosResponse<any>> {
        console.log('[scheme-ws] fetchUser', endpoint)
        return {
            data: {},
            status: 200,
            statusText: 'ok'
        } as AxiosResponse
    }

    async logout (): Promise<any> {
        console.log('[scheme-ws] logout')
        const $auth = this.$auth as Auth

        await wsapi.auth.logout()
        wsapi.ws.disconnect()

        $auth.reset()
    }
}
