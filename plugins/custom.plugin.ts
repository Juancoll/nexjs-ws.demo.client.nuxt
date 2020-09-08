import { Context } from '@nuxt/types'

export interface ICustomPlugin {
    log: ( msg: string )=> void
}

export default ( context: Context, inject: any ): void => {
    console.log( '[plugin-custom] initialization context = ', context != undefined )
    const plugin: ICustomPlugin = {
        log: ( msg: string ) => {
            console.log( `Hello from custom plugin: ${msg}!` )
        },
    }
    // Inject $hello(msg) in Vue, context and store.
    inject( 'custom', plugin )
}
