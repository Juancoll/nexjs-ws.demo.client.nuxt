<template lang="pug">
    v-layout
        v-flex.text-center
            logo
            blockquote.blockquote &#8220;First, solve the problem. Then, write the code.&#8221;
                footer
                    small
                        em &mdash;John Johnson
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContentPage extends Vue {
    constructor () {
        super()
        console.log('[page-inspire] constructor')
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log('[page-inspire][vue] beforeCreated()') }
    created (): void { console.log('[page-inspire][vue] created()') }
    beforeMount () { console.log('[page-inspire][vue] beforeMount()') }
    mounted (): void { console.log('[page-inspire][vue] mounted()') }
    beforeUpdate (): void { console.log('[page-inspire][vue] beforeUpdate()') }
    updated (): void { console.log('[page][inspire-vue] updated()') }
    beforeDestroy (): void { console.log('[page-inspire][vue] beforeDestroy()') }
    destroyed (): void { console.log('[page-inspire][vue] destroyed()') }
    // #endregion
}
</script>
