import { Context } from '@nuxt/types'

export default (context: Context) => {
    console.log('[plugin-auth] initialization context = ', context != undefined)
    // const { $auth } = context
    // if (!$auth.loggedIn) {
    //     console.log('[plugin-auth] not logged')
    // }
    // console.log('[plugin-auth] logged user = ', $auth.user)
}
