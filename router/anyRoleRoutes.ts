import { IRouteMetadata } from '@/lib/router'

import { RouteConfig } from 'vue-router'

import HomeView from '@/pages/Home.vue'
import WSConnectionView from '@/pages/websockets/WSConnection.vue'
import WSContractAuth from '@/pages/websockets/WSContractAuth.vue'
import WSContractBase from '@/pages/websockets/WSContractBase.vue'
import WSContractCredentials from '@/pages/websockets/WSContractCredentials.vue'

import HttpConnectionView from '@/pages/http/HttpConnection.vue'
import HttpDefaultView from '@/pages/http/HttpDefault.vue'
import HttpTestApiView from '@/pages/http/HttpTest.vue'

export const routes: RouteConfig[] = [
  {
    path: '/any',
    name: 'any',
    component: HomeView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-home',
      iconColor: 'primary',
      title: 'Home',
      subtitle: 'any branch - home'
    } as IRouteMetadata
  },
  {
    path: '/any/ws',
    name: 'any-ws',
    component: WSConnectionView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-flash',
      iconColor: 'primary',
      title: 'Websockets',
      subtitle: 'WS Connection'
    } as IRouteMetadata,
    children: [
      {
        path: '/any/ws/contracts/Base',
        name: 'any-ws-contracts-base',
        component: WSContractBase,
        meta: {
          showInToolbar: false,
          showInDrawer: true,
          icon: 'mdi-file-document',
          iconColor: 'secondary',
          title: 'Contract Base',
          subtitle: 'basics features',
          parent: 'any-ws'
        } as IRouteMetadata
      },
      {
        path: '/any/ws/contracts/auth',
        name: 'any-ws-contracts-auth',
        component: WSContractAuth,
        meta: {
          showInToolbar: false,
          showInDrawer: true,
          icon: 'mdi-file-document',
          iconColor: 'secondary',
          title: 'Contract Auth',
          subtitle: 'Require Authentication',
          parent: 'any-ws'
        } as IRouteMetadata
      },
      {
        path: '/any/ws/contracts/credentials',
        name: 'any-ws-contracts-credentials',
        component: WSContractCredentials,
        meta: {
          showInToolbar: false,
          showInDrawer: true,
          icon: 'mdi-file-document',
          iconColor: 'secondary',
          title: 'Contract Credentials',
          subtitle: 'Require Credentials',
          parent: 'any-ws'
        } as IRouteMetadata
      }
    ]
  },
  {
    path: '/any/http',
    name: 'any-http',
    component: HttpConnectionView,
    meta: {
      showInToolbar: true,
      showInDrawer: true,
      icon: 'mdi-flash',
      iconColor: 'primary',
      title: 'Http',
      subtitle: 'Http Connection'
    } as IRouteMetadata,
    children: [
      {
        path: '/any/http/default',
        name: 'any-http-default',
        component: HttpDefaultView,
        meta: {
          showInToolbar: false,
          showInDrawer: true,
          icon: 'mdi-file-document',
          iconColor: 'secondary',
          title: 'Http Default Api',
          subtitle: 'http api\'s',
          parent: 'any-http'
        } as IRouteMetadata
      },
      {
        path: '/any/http/test',
        name: 'any-http-test',
        component: HttpTestApiView,
        meta: {
          showInToolbar: false,
          showInDrawer: true,
          icon: 'mdi-file-document',
          iconColor: 'secondary',
          title: 'Http Test Api',
          subtitle: 'http api\'s',
          parent: 'any-http'
        } as IRouteMetadata
      }
    ]
  }
]
