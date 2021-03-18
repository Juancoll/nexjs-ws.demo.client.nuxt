import { Context } from '@nuxt/types'

export default function (context: Context): void {
    console.log('[middleware][custom]', context !== undefined)

    // If the user is not authenticated
    // try {
    //    ... anything
    // } catch (error) {
    //     context.error(error)
    // }
    // const { store, redirect } = context
    // if (!store.state.authenticated) {
    //     return redirect('/login')
    // }
}
