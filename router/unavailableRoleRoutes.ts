import { IRouteMetadata } from '@/lib/router'

import HomeView from '@/pages/Home.vue'
import { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/unavailableRole',
    name: 'unavailableRole',
    component: HomeView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-home',
      iconColor: 'primary',
      title: 'home',
      subtitle: 'unavailableRole branch - home'
    } as IRouteMetadata
  }
]
