<template lang="pug">
    v-app
        v-navigation-drawer(v-if="drawerEnabled" app v-model="showDrawer" clipped :width="325")
            v-list(subheader two-line)
                RouterMenuItem(v-for="(route, index) in drawerRoutes" :key="`drawer-item-${index}`" :route="route")

        v-app-bar(app clipped-left color="dark" )
            v-app-bar-nav-icon(v-if="drawerEnabled" @click="toggleDrawer")
            v-toolbar-title.flex.h-container.items.v-center
                img( v-bind:src="logo" alt='logo' style="height: 32px;")
                div.flex.h-container.items.v-center
                    div.primary--text(style="padding-left: 10px;") {{title}}
                    div(style="padding-left: 10px;")  {{mode}}

            v-spacer
            v-toolbar-items
            v-tooltip(bottom v-for="(route, index) in toolbarRoutes" :key="`toolbar-item-${index}`")
                template(v-slot:activator="{ on }")
                    v-btn(text @click="goToRoute(route)" v-on="on") {{route.meta.title}}
                span {{route.meta.subtitle}}

            v-menu(v-if="showUserMenu" offset-y content-class="dropdown-menu" transition="slide-y-transition")
                template(v-slot:activator="{ on }")
                    v-btn.mx-2(color="primary" v-on="on" fab small)
                        v-icon mdi-account
                v-list(style="min-width:150px")
                    v-list-item.pad-l-1(v-if="auth.isAuth" @click="logout()")
                        v-list-item-title Logout
                    v-list-item.pad-l-1(v-else @click="login")
                        v-list-item-title login
                    v-divider(v-if="showRolesInMenu")
                    v-list-item.pad-l-1(v-if="showRolesInMenu" v-for="role in userValidRoles" :key="`toolbar-menu-item-${role}`" @click="changeRole(`${role}`)")
                        v-list-item-title {{role}}

        notifications(group="top" position="top center")
        notifications(group="bottom" position="bottom right" )

        v-main.flex.v-container.overflow.full(v-resize="resize")
            v-container(fill-height fluid)
                transition(name="fade")
                    nuxt

        v-footer(absolute app)
            v-row
                div(style="margin-left:10px" v-html="footer.left")
                v-spacer
                div(v-html="footer.center")
                v-spacer
                div(style="margin-right:10px" v-html="footer.right")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { RouteConfig } from 'vue-router'

import { IAuthUser } from '@/lib/authApp'
import { RouterTools, BranchEventArgs } from '@/lib/router'

import { env } from '@/services/env'
import { authApp } from '@/services/authApp'
import { events, EventKeys as E } from '@/services/events'

import router from '@/router'

import RouterMenuItem from '@/components/RouterMenuItem.vue'

@Component({
  components: {
    RouterMenuItem
  }
})
export default class RootView extends Vue {
    // #region [ data ]
    public logo = require('@/assets/icons/icon_256.png');
    public title = 'vuetify demo';
    public showDrawer = false;
    public footer = {
      // eslint-disable-next-line quotes
      left: "<span style='color:red'><b>STATUS</b></span>",
      center: '',
      right: '&copy; ne)( group'
    };

    public userValidRoles: string[] = [];
    public showUserMenu = true;
    public showRolesInMenu = false;
    public drawerEnabled = false;
    public drawerRoutes: RouteConfig[] = [];
    public toolbarRoutes: RouteConfig[] = [];
    public auth = authApp;
    // #endregion

    // #region  [ computed ]
    public get mode (): string {
      const mode = env.vars.mode as string
      if (mode == 'production') {
        return ''
      }
      return `(${mode})`
    }
    // #endregion

    constructor () {
      super()
      console.log('[App.vue] constructor')
    }

    // #region  [ methods ]
    goToRoute (route: RouteConfig): void {
      router.pushIfNotCurrent(route.path)
    }

    toggleDrawer (): void {
      this.showDrawer = !this.showDrawer
    }

    resize (): void {
      this.$set(
        this.footer,
        'center',
        JSON.stringify({ x: window.innerWidth, y: window.innerHeight })
      )
    }

    logout (): void {
      authApp.logout()
    }

    login (): void {
      router.pushIfNotCurrent('/auth/login')
    }

    changeRole (role: string): void {
      router.updateRole(role)
    }
    // #endregion

    // #region [ handlers ]
    private onUpdateUser (user?: IAuthUser | null) {
      router.updateUser(user)
      this.userValidRoles = !user ? [] : router.userValidRoles
      this.setUserMenuVisibilities()
    }

    private onRouterBranchChange (e: BranchEventArgs) {
      const routes = e.to.routes
      this.drawerRoutes = RouterTools.createMenuRoutes(routes).filter(
        (x: RouteConfig) => x.meta && x.meta.showInDrawer
      )
      console.log(this.drawerRoutes)
      this.toolbarRoutes = RouterTools.flatRoutes(routes).filter(
        (x: RouteConfig) => x.meta && x.meta.showInToolbar
      )
    }
    // #endregion

    // #region  [ private ]
    private setUserMenuVisibilities () {
      this.showRolesInMenu =
            router.useAuth &&
            router.useRoles &&
            authApp.isAuth &&
            this.userValidRoles.length > 1
    }
    // #endregion

    // #region [ Vue ]
    mounted (): void {
      const self = this
      router.onRouteChange.sub(() => {
        self.showUserMenu = router.useAuth && !router.isAuthRoute
        self.drawerEnabled =
                router.isAuthRoute && !router.useDefault
                  ? false
                  : self.drawerRoutes.length > 0
      })

      authApp.onAuthenticate.sub(this.onUpdateUser)
      router.onBranchChange.sub(this.onRouterBranchChange)

      events.$on(E.toolbar.left, (data: string) =>
        this.$set(this.footer, 'left', data)
      )
      events.$on(E.toolbar.center, (data: string) =>
        this.$set(this.footer, 'center', data)
      )
      events.$on(E.toolbar.right, (data: string) =>
        this.$set(this.footer, 'right', data)
      )

      this.resize()
      this.onUpdateUser(authApp.user)
    }

    destroyed (): void {
      authApp.onAuthenticate.unsub(this.onUpdateUser)
      router.onBranchChange.unsub(this.onRouterBranchChange)
    }
    // #endregion
}
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
}

.fade-enter-active {
    transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
