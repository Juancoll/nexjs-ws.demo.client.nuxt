import { IRouteMetadata } from '@/lib/router'

import { RouteConfig } from 'vue-router'
import LoginView from '@/pages/auth/login.vue'
import RegisterView from '@/pages/auth/register.vue'

export const routes: RouteConfig[] = [
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView,
    meta: {
      showInToolbar: false,
      showInDrawer: false,
      icon: 'mdi-account',
      iconColor: 'primary',
      title: 'login',
      subtitle: 'login page'
    } as IRouteMetadata
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterView,
    meta: {
      showInToolbar: false,
      showInDrawer: false,
      icon: 'mdi-account',
      iconColor: 'primary',
      title: 'register',
      subtitle: 'register page'
    } as IRouteMetadata
  }
]
