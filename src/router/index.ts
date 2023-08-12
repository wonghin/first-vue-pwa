import D1View from '../views/D1View.vue'
import D2View from '../views/D2View.vue'
import D3View from '../views/D3View.vue'
import AuthView from '@/views/AuthView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserInfoStore } from '@/hooks/useUserInfoStore'
import ErrorView from '../views/ErrorView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/product/ProductView.vue'
import SettingViewVue from '@/views/setting/SettingView.vue'
const rootRoutePage404: RouteRecordRaw[] = [
  {
    path: '/error',
    component: ErrorView,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/error',
  },
]

const indexSubRoute404: RouteRecordRaw[] = [
  {
    path: 'error',
    component: ErrorView, props: { isStyle: false }
  },
  {
    path: '/:pathMatch(/.*)',
    redirect: '/error',
  },

]

export const mainRouter: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'authView',
    component: AuthView,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,

      },
      {
        path: '/',
        redirect: 'home',
      },
      {
        path: '/home/:homeId(\\d+)',
        name: 'productSingle',
        component: ProductView
      },

      {
        path: 'D1',
        name: 'D1',
        component: D1View
      },
      {
        path: 'D2',
        name: 'D2',
        component: D2View
      },
      {
        path: 'D3',
        name: 'D3',
        component: D3View
      },


      ...indexSubRoute404
    ],
  },
  ...rootRoutePage404
]

const router = createRouter({
  history: createWebHistory(),
  routes: mainRouter
})


router.beforeEach(async (to, from) => {
  const userInfo = useUserInfoStore()
  if (
    // make sure the user is authenticated
    !userInfo.isLogin
    &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'authView'
  ) {
    // redirect the user to the login page
    return { name: 'authView' }
  }
})

export default router
