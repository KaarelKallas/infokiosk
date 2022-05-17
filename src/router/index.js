import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuildingView from '../views/BuildingView.vue'
import MessView from '../views/MessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buildings',
      name: 'buildings',
      component: BuildingView
    },
    {
      path: '/mess',
      name: 'mess',
      component: MessView
    },
  ]
})

export default router
