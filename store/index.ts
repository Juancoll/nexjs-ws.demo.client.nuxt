import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import AuthStore from './auth'

export const actions = {
    async nuxtServerInit (store: any, context: Context) : Promise<void> {
        console.log('[store-main] nuxtServerInit')
        console.log('[store-main] nuxtServerInit - store', store != undefined)
        console.log('[store-main] nuxtServerInit - context', context != undefined)

        const req = context.req as any

        if (req.session) {
            console.log('[store-main] nuxtServerInit session exists')
            console.log(req.session)
        }

        if (req.session && req.session.user) {
            console.log('[store-main] nuxtServerInit is Auth')
            const authStore: AuthStore = getModule(AuthStore, context.store)
            authStore.SET_USER(req.session.user)
            authStore.SET_TOKEN(req.session.user)
        } else {
            console.log('[store-main] nuxtServerInit is not Auth')
        }
    }
}
