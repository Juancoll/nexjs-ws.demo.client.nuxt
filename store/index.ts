import { Context } from '@nuxt/types'

export const actions = {
    async nuxtServerInit (store: any, context: Context) : Promise<void> {
        console.log('[store-main] nuxtServerInit')
        console.log('[store-main] nuxtServerInit - store', store != undefined)
        console.log('[store-main] nuxtServerInit - context', context != undefined)
    }
}
