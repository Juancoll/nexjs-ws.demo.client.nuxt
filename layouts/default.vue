<template lang="pug">
    v-app
        v-navigation-drawer(v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app)
            v-list
                v-list-item(v-for="(item, i) in items" :key="i" :to="item.to" router exact)
                    v-list-item-action
                        v-icon {{ item.icon }}
                    v-list-item-content
                        v-list-item-title(v-text="item.title")
        v-app-bar( :clipped-left="clipped" fixed app)
            v-app-bar-nav-icon( @click.stop="drawer = !drawer" )
            v-btn( icon @click.stop="miniVariant = !miniVariant")
                v-icon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
            v-btn(icon @click.stop="clipped = !clipped")
                v-icon mdi-application
            v-btn(icon @click.stop="fixed = !fixed")
                v-icon mdi-minus
            img(:src="logo" alt="logo" style="height: 32px; margin-right:10px")
            v-toolbar-title( v-text="title")
            v-spacer

            v-btn(icon @click.stop="rightDrawer = !rightDrawer")
                v-icon mdi-menu

            v-menu(offset-y content-class="dropdown-menu" transition="slide-y-transition")
                template(v-slot:activator="{ on }")
                    v-btn.mx-2(color="primary" v-on="on" fab small)
                        v-icon mdi-account
                v-list(v-if="isAuth" style="min-width:200px")
                    v-list-item
                        v-list-item-title {{user.email}}
                    v-list-item(@click="logout")
                        v-list-item-title Logout
                v-list(v-else style="min-width:200px")
                    v-list-item(@click="login")
                        v-list-item-title login

        v-main.flex.v-container.overflow.full(v-resize="resize")
            v-container(fill-height fluid)
                transition(name="fade")
                    nuxt

        v-navigation-drawer(v-model="rightDrawer" :right="right" temporary fixed)
            v-list
                v-list-item(@click.native="right = !right")
                    v-list-item-action
                        v-icon mdi-repeat
                    v-list-item-title Switch drawer (click me)

        v-footer(:absolute="!fixed" app)
            span &copy; {{ footer }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
    // #region [ data ]
    logo = require('@/assets/icons/icon_256.png');
    clipped= true
    drawer = false
    fixed= false
    footer = 'size'
    items= [
        {
            icon: 'mdi-home',
            title: 'Welcome',
            to: '/'
        },
        {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
        },
        {
            icon: 'mdi-text-box',
            title: 'Content',
            to: '/content'
        },
        {
            icon: 'mdi-nuxt',
            title: 'Nuxt',
            to: '/nuxt'
        },
        {
            icon: 'mdi-backup-restore',
            title: 'Store',
            to: '/store'
        },
        {
            icon: 'mdi-flash',
            title: 'WS',
            to: '/ws'
        },
        {
            icon: 'mdi-api',
            title: 'HTTP API',
            to: '/http'
        },
        {
            icon: 'mdi-account',
            title: 'login',
            to: '/auth/login'
        },
        {
            icon: 'mdi-account-lock',
            title: 'Authenticated',
            to: '/authenticated'
        }
    ]

    miniVariant= false
    right= true
    rightDrawer= false
    title= 'Nuxt - demo'
    // #endregion

    get isAuth () {
        return this.$auth.loggedIn
    }

    get user () {
        return this.$auth.user
    }

    constructor () {
        super()
        console.log('[layout-default] constructor')
    }

    // #region [ vue lifecycle ]
    beforeCreate () { console.log('[layout-default][vue] beforeCreated()') }
    created (): void { console.log('[layout-default][vue] created()') }
    beforeMount () { console.log('[layout-default][vue] beforeMount()') }
    mounted (): void { console.log('[layout-default][vue] mounted()') }
    beforeUpdate (): void { console.log('[layout-default][vue] beforeUpdate()') }
    updated (): void { console.log('[layout-default][vue] updated()') }
    beforeDestroy (): void { console.log('[layout-default][vue] beforeDestroy()') }
    destroyed (): void { console.log('[layout-default][vue] destroyed()') }
    // #endregion

    // #region [ nuxt ]
    head () {
        console.log('[layout-default][nuxt] head')
        return { title: 'custom-nuxt-content' }
    }
    // #endregion

    resize (): void {
        this.footer = JSON.stringify({ x: window.innerWidth, y: window.innerHeight })
    }

    async logout () {
        await this.$auth.logout()
    }

    login () {
        this.$nuxt.context.redirect('/auth/login')
    }
}
</script>

<style lang="scss" scoped>
.v-list-item{
    margin: 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.12s;
}

.fade-enter-active {
    transition-delay: 0.12s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
