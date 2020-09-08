import { Context } from '@nuxt/types'

export const actions = {
    nuxtServerInit ( store: any, context: Context ): void {
        console.log( '[store-main] nuxtServerInit' )
        console.log( '[store-main] nuxtServerInit - store', store != undefined )
        console.log( '[store-main] nuxtServerInit - context', context != undefined )
    },
}
