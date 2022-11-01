import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue")
  },
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
