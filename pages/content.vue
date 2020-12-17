<template lang="pug">
    v-layout
        v-card
            h1 NUXT CONTENT
            NuxtContent(class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto" :document="document")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component( {
    asyncData: async ( context: Context ) => {
        try {
            console.log( '[page][content][nuxt] asyncData' )

            // #region nuxt-Content
            const { $content } = context
            const document = await $content( 'hello' ).fetch()
            return { document }
        } catch ( error ) {
            context.error( error )
        }
    },
} )
export default class ContentPage extends Vue {
    document?: string;

    constructor () {
        super()
        console.log( '[page-content] constructor' )
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log( '[page-content][vue] beforeCreated()' ) }
    created (): void { console.log( '[page-content][vue] created()' ) }
    beforeMount (): void { console.log( '[page-content][vue] beforeMount()' ) }
    mounted (): void { console.log( '[page-content][vue] mounted()' ) }
    beforeUpdate (): void { console.log( '[page-content][vue] beforeUpdate()' ) }
    updated (): void { console.log( '[page][content-vue] updated()' ) }
    beforeDestroy (): void { console.log( '[page-content][vue] beforeDestroy()' ) }
    destroyed (): void { console.log( '[page-content][vue] destroyed()' ) }
    // #endregion
}
</script>

<style lang="scss" scoped>
.v-card {
    margin: 20px;
    padding: 20px;
}
</style>
