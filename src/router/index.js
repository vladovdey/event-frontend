import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'
import AdminView from '../views/admin/AdminView.vue'
import AdminAddEvent from '../views/admin/AdminAddEvent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/admin/add-event',
    name: 'AdminAddEvent',
    component: AdminAddEvent
  },
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "RegistrationForm" */ '../views/FormView.vue')
  },
  {
    path: '/city/:id',
    name: 'city',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CityView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
