<template lang="pug">
    v-card
        h1 Authenticate page
        p Welcome {{user.email}}
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AuthStore from '~/store/auth'

@Component({
    middleware: 'auth'
})
export default class AuthenticatedPage extends Vue {
    private authStore: AuthStore;
    public get user () {
        return this.authStore.getUser
    }

    constructor () {
        super()
        console.log('[page-authenticated] constructor')
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log('[page-authenticated][vue] beforeCreated()') }
    created (): void {
        console.log('[page-authenticated][vue] created()')
        this.authStore = getModule(AuthStore, this.$store)
    }

    beforeMount () { console.log('[page-authenticated][vue] beforeMount()') }
    mounted (): void { console.log('[page-authenticated][vue] mounted()') }
    beforeUpdate (): void { console.log('[page-authenticated][vue] beforeUpdate()') }
    updated (): void { console.log('[page][authenticated-vue] updated()') }
    beforeDestroy (): void { console.log('[page-authenticated][vue] beforeDestroy()') }
    destroyed (): void { console.log('[page-authenticated][vue] destroyed()') }
    // #endregion
}
</script>

<style lang="scss" scoped>
.v-card {
    margin: 20px;
    padding: 20px;
    width: 100%;
}
</style>
