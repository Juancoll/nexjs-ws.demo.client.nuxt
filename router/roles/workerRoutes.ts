import { IRouteMetadata } from '@/lib/router'

import HomeView from '@/pages/Home.vue'

import { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/roles/worker',
    name: 'roles-worker',
    component: HomeView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-cash',
      iconColor: 'primary',
      title: 'Home',
      subtitle: 'role worker branch'
    } as IRouteMetadata
  }
]
