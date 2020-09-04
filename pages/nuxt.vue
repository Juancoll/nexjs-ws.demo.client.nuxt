<template lang="pug">
    v-layout
        v-card
            h1 I am rendered on the {{ renderedOn }} side

            v-divider

            h1 helper $nuxt
            div( v-if="$nuxt.isOffline") You are offline
            div( v-else) You are online

            v-divider

            h1 Plugins
            v-btn(@click="$custom.log('call fom UI')") Execute Custom Plugin

            v-divider

            h1 Client-only Components
            client-only(placeholder="Loading...")
                span NOW IS CLIENT RENDERED
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { RouteConfig } from '@nuxt/types/config/router'

@Component({
    asyncData: (context: Context) => {
        try {
            console.log('[page-nuxt][nuxt] asyncData(...)')

            // #region [ context ]
            const { app, store, route, params, query, env, isDev, isHMR, redirect, error, $config } = context

            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.app', app.name)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.store', store !== undefined)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.route', route.path)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.params', params)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.query', query)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.env', env)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.isDev', isDev)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.isHMR', isHMR)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.redirect', redirect !== undefined)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.error', error !== undefined)
            console.log('[page-nuxt][nuxt] asyncData(...) [client&server] context.$config ', $config)

            if (process.server) {
                const { req, res, beforeNuxtRender } = context
                console.log('[page-nuxt][nuxt] asyncData(...) [server] context.req', req.originalUrl)
                console.log('[page-nuxt][nuxt] asyncData(...) [server] context.res', res.statusMessage)
                console.log('[page-nuxt][nuxt] asyncData(...) [server] context.beforeNuxtRender', beforeNuxtRender)
            }

            // Only available on the Client-side
            if (process.client) {
                const { from, nuxtState } = context
                console.log('[page-nuxt][nuxt] asyncData(...) [client] context.from', from.path)
                console.log('[page-nuxt][nuxt] asyncData(...) [client] context.nuxtState', nuxtState)
            }

            // #endregion

            // #region Plugin
            context.$custom.log('call from nuxt context')
            // #endregion

            return { renderedOn: process.client ? 'client' : 'server' }
        } catch (error) {
            context.error(error)
        }
    },
    middleware: 'custom',
    layout (context: Context) {
        console.log('[page-nuxt][nuxt] layout(...)', context !== undefined)
        return 'default'
    },
    // try false and scroll page
    scrollToTop: false,
    validate: (context:Context) => {
        console.log('[page-nuxt][nuxt] validate(...)', context !== undefined)
        return true
    },
    watchQuery: (newQuery:any, oldQuery:any) => {
        console.log('[page-nuxt][nuxt] watchQuery(...)', newQuery, oldQuery)
        console.log('[page-nuxt][nuxt] watchQuery(...) - newQuery', newQuery)
        console.log('[page-nuxt][nuxt] watchQuery(...) - oldQuery', oldQuery)
        return true
    }
})
export default class ContentPage extends Vue {
    constructor () {
        super()
        console.log('[page-nuxt] constructor')
        this.$custom.log('call from vue component')
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log('[page-nuxt][vue] beforeCreated()') }
    created (): void { console.log('[page-nuxt][vue] created()') }
    beforeMount () {
        console.log('[page-nuxt][vue] beforeMount()')
        console.log('[page-nuxt][vue] beforeMount() - can use window browser object here', window !== undefined)
    }

    mounted (): void {
        console.log('[page-nuxt][vue] mounted()')
        console.log('[page-nuxt][vue] mounted() - can use window browser object here', window !== undefined)
    }

    beforeUpdate (): void { console.log('[page-nuxt][vue] beforeUpdate()') }
    updated (): void { console.log('[page-nuxt][vue] updated()') }
    beforeDestroy (): void { console.log('[page-nuxt][vue] beforeDestroy()') }
    destroyed (): void { console.log('[page-nuxt][vue] destroyed()') }
    // #endregion

    // #region [ nuxt]
    head () {
        console.log('[page-nuxt][nuxt] head')
        return { title: 'nuxt-content' }
    }

    key (route: RouteConfig) {
        console.log('[page-nuxt][nuxt] key = ', route.path)
    }
    // #endregion
}
</script>

<style lang="scss" scoped>
.v-card {
    margin: 20px;
    padding: 20px;
    width: 100%;
    height: 1920px;
}
.v-divider{
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
