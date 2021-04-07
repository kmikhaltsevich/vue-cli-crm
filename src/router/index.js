import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'default' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'default' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'default' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/detail-record',
    name: 'detailRecord',
    meta: { layout: 'default' },
    component: () => import('../views/DetailRecord.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'default' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'default' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'default' },
    component: () => import('../views/Record.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
