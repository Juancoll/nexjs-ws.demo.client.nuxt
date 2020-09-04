<template lang="pug">
    v-app
        h1(v-if="error.statusCode === 404") {{ pageNotFound }}
        h1(v-else) {{ otherError }}
        NuxtLink(to="/") Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
    layout: 'empty'
})
export default class ErrorLayout extends Vue {
    // #region [ data ]
    pageNotFound = '404 Not Found'
    otherError = 'An error occurred'
    // #endregion

    // #region [ props ]
    @Prop() error?: any
    // #endregion

    constructor () {
        super()
        console.log('[layout-error] constructor')
    }

    // #region [ vue lifecycle ]
    beforeCreate () { console.log('[layout-error][vue] beforeCreated()') }
    created (): void { console.log('[layout-error][vue] created()') }
    beforeMount () { console.log('[layout-error][vue] beforeMount()') }
    mounted (): void { console.log('[layout-error][vue] mounted()') }
    beforeUpdate (): void { console.log('[layout-error][vue] beforeUpdate()') }
    updated (): void { console.log('[layout-error][vue] updated()') }
    beforeDestroy (): void { console.log('[layout-error][vue] beforeDestroy()') }
    destroyed (): void { console.log('[layout-error][vue] destroyed()') }
    // #endregion

    // #region [ nuxt ]
    head () : any {
        console.log('[layout-error][nuxt] head')

        const title = this.error && this.error.statusCode === 404
            ? this.pageNotFound
            : this.otherError

        return {
            title
        }
    }
    // #endregion
}
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
