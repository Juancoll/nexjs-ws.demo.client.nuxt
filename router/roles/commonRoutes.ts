import { IRouteMetadata } from '@/lib/router'

import CommonView from '@/pages/roles/CommonsRoles.vue'
import { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/common',
    name: 'home',
    component: CommonView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-home',
      iconColor: 'primary',
      title: 'home',
      subtitle: 'common route from any role'
    } as IRouteMetadata
  }
]
