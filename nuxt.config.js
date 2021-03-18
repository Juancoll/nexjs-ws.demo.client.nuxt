import morgan from 'morgan'
import colors from 'vuetify/es5/util/colors'

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    env: {
        envVar1: 'envVar1Value',
        envVar2: 'envVar2Value'
    },
    publicRuntimeConfig: {
        publicVar1: 'publicVar1Value',
        publicvar2: 'publicVar2Value'
    },
    privateRuntimeConfig: {
        privateVar1: 'privateVar1Value',
        privateVar2: 'privateVar2Value'
    },

    head: {
        titleTemplate: '%s - nuxt-sample',
        title: 'nuxt-sample',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/style/common.scss',
        '~/assets/style/main.scss',
        '~/assets/style/nexcode.flex.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/custom.plugin',
        '~/plugins/wsapi'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/auth-next',
            {
                strategies: {
                    local: {
                        scheme: 'local',
                        token: {
                            required: false,
                            type: false,
                        },
                        user: {
                            property: 'user',
                        },
                        endpoints: {
                            login: { url: '/auth/localLogin', method: 'post' },
                            logout: { url: '/auth/localLogout', method: 'post' },
                            user: { url: '/auth/localMe', method: 'get' },
                        },
                    },
                    ws: {
                        scheme: '~/plugins/auth.scheme.plugin',
                        ws: {
                            url: 'http://localhost:3000',
                            path: '/wsapi',
                            nsp: '/',
                        },
                    },
                },
                redirect: {
                    login: '/auth/login',
                    logout: '/',
                    callback: false,
                    home: false,
                },
            }
        ],
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/style/vuetify.scss'],
        theme: {
            dark: false,
        }
    },
    serverMiddleware: [
        morgan('tiny'),
        '~/api/custom.server-middleware.ts',
        { path: '/test', handler: '~/api/handler.server-middleware.ts' }
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend (config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
            }
        },
        transpile: ['@nuxtjs/auth-next'],
    },
    server: {
        port: 8000,
    },
}
