import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import AuthStore from '~/store/auth'

export default function (context:Context) {
    console.log('[middleware-auth]', context !== undefined)

    const { store, redirect } = context
    const authStore = getModule(AuthStore, store)
    if (!authStore.isAuth) {
        return redirect('/auth/login')
    }
}
