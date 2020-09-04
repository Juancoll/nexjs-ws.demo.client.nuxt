import 'vue'
import '@nuxt/types'

declare interface ICustomPlugin {
    log: (msg:string) => void
}

declare module '@nuxt/types' {
    interface Context {
        $custom: ICustomPlugin
    }
}

declare module 'vue/types/vue' {
    // 3. Declare augmentation for Vue
    interface Vue {
        $custom: ICustomPlugin
    }
}
