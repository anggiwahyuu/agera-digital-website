import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mentor',
    name: 'mentor',
    component: () => import('../views/MentorView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PricingView.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/BusinessView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
