import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import HomePage from '../views/HomePage.vue'

import tabsPage from '../views/tabs/tabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: 'tabs/home',
  },

  {
    path: '/tabs/',
    component: tabsPage,
    children: [
      {
        path:'',
        redirect:'/home',
      },
      {
        path: 'home',
        component: () =>import ('@/views/home/homePage.vue')
      },
      {
        path: 'transaction',
        component: () =>import ('@/views/transaction/transactionPage.vue')
      },
      {
        path: 'card',
        component: () =>import ('@/views/card/cardPage.vue')
      },
      {
        path: 'settings',
        component: () => import ('@/views/settings/settingsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
