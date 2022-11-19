import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    meta: {
      title: "Agera Digital | Login"
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
    meta: {
      title: "Agera Digital | Register"
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "Agera Digital | Home"
    }
  },
  {
    path: '/mentor',
    name: 'mentor',
    component: () => import('../views/MentorView.vue'),
    meta: {
      title: "Agera Digital | Mentor"
    }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PricingView.vue'),
    meta: {
      title: "Agera Digital | Pricing"
    }
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('../views/BusinessView.vue'),
    meta: {
      title: "Agera Digital | Business"
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
