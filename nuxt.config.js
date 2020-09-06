import morgan from 'morgan'
import colors from 'vuetify/es5/util/colors'

export default {
    // Nuxt rendering mode - See https://nuxtjs.org/api/configuration-mode
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

    // Nuxt rendering mode - See https://nuxtjs.org/api/configuration-mode
    mode: 'universal',

    // Nuxt target - See https://nuxtjs.org/api/configuration-target
    target: 'server',

    // Headers of the page - See https://nuxtjs.org/api/configuration-head
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS
    css: [
        '~/assets/style/common.scss',
        '~/assets/style/main.scss',
        '~/assets/style/nexcode.flex.scss'
    ],

    // Plugins to load before mounting the App - https://nuxtjs.org/guide/plugins
    plugins: [
        '~/plugins/custom.plugin',
        '~/plugins/httpapi',
        '~/plugins/wsapi'
    ],

    // Auto import components - See https://nuxtjs.org/api/configuration-components
    components: true,

    // Nuxt.js dev-modules
    buildModules: [
        '@nuxt/typescript-build',
        ['@nuxtjs/vuetify',
            {
                customVariables: ['~/assets/style/vuetify.scss'],
                theme: {
                    dark: false,
                    themes: {
                        dark: {
                            primary: colors.blue.darken2,
                            accent: colors.grey.darken3,
                            secondary: colors.amber.darken3,
                            info: colors.teal.lighten1,
                            warning: colors.amber.base,
                            error: colors.deepOrange.accent4,
                            success: colors.green.accent3
                        }
                    }
                }
            }
        ]
    ],

    //  Nuxt.js modules
    modules: [
        ['@nuxt/content', {}], // Doc: https://github.com/nuxt/content
        ['@nuxtjs/axios', {
            baseURL: 'http://localhost:3000/api',
            credentials: true
        }],
        ['@nuxtjs/auth-next', {
            strategies: {
                'local-session': {
                    scheme: 'local',
                    token: {
                        required: false,
                        type: false
                    },
                    user: {
                        property: 'user'
                    },
                    endpoints: {
                        login: { url: '/auth/localLogin', method: 'post' },
                        logout: { url: '/auth/localLogout', method: 'post' },
                        user: { url: '/auth/localMe', method: 'get' }
                    }
                },
                'local-jwt': {
                    scheme: 'local',
                    token: {
                        property: 'token',
                        required: true,
                        type: 'Bearer'
                    },
                    user: {
                        property: 'user'
                    },
                    endpoints: {
                        login: { url: '/auth/jwtLogin', method: 'post' },
                        logout: { url: '/auth/jwtLogout', method: 'post' },
                        user: { url: '/auth/jwtMe', method: 'get' }
                    }
                },
                'nexjs-ws': {
                    scheme: '~/plugins/schemes/ws.auth.scheme.v2',
                    token: {
                        property: 'token',
                        required: true,
                        type: 'Bearer'
                    },
                    user: {
                        property: 'user',
                        autoFetch: false
                    },
                    ws: {
                        url: 'http://localhost:3000',
                        path: '/wsapi',
                        nsp: '/'
                    }
                }
            },
            redirect: {
                login: '/auth/login',
                logout: '/',
                callback: false,
                home: false
            }
        }]
    ],

    // Build configuration - See https://nuxtjs.org/api/configuration-build/
    build: {
        extend (config, ctx) {
            if (ctx.isDev) {
                config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
            }
        },
        transpile: ['@nuxtjs/auth']
    },

    serverMiddleware: [
        morgan('tiny'),
        '~/api/custom.server-middleware.ts',
        { path: '/test', handler: '~/api/handler.server-middleware.ts' }
    ],
    server: {
        port: 8000
    }
}
