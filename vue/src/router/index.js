import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import UserView from '@/views/pages/UserView.vue'
import BioskopView from '@/views/pages/BioskopView.vue'
import RepertoarView from '@/views/pages/RepertoarView.vue'
import LokacijeView from '@/views/pages/LokacijeView.vue'
import FilmoviView from '@/views/pages/FilmoviView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    },
    {
      path: '/bioskopi',
      name: 'bioskop',
      component: BioskopView
    },
    {
      path: '/repertoar',
      name: 'repertoar',
      component: RepertoarView
    },
    {
      path: '/lokacije',
      name: 'lokacije',
      component: LokacijeView
    },
    {
      path: '/filmovi',
      name: 'filmovi',
      component: FilmoviView
    }
  ]
})

export default router
