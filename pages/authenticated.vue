<template lang="pug">
    v-card
        h1 Authenticate page
        p Welcome {{user.email}}
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component( {
    middleware: 'auth',
} )
export default class AuthenticatedPage extends Vue {
    public get user (): any {
        return this.$auth.user
    }

    constructor () {
        super()
        console.log( '[page-authenticated] constructor' )
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log( '[page-authenticated][vue] beforeCreated()' ) }
    created (): void {
        console.log( '[page-authenticated][vue] created()' )
    }

    beforeMount (): void { console.log( '[page-authenticated][vue] beforeMount()' ) }
    mounted (): void { console.log( '[page-authenticated][vue] mounted()' ) }
    beforeUpdate (): void { console.log( '[page-authenticated][vue] beforeUpdate()' ) }
    updated (): void { console.log( '[page][authenticated-vue] updated()' ) }
    beforeDestroy (): void { console.log( '[page-authenticated][vue] beforeDestroy()' ) }
    destroyed (): void { console.log( '[page-authenticated][vue] destroyed()' ) }
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
