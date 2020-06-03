import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [

  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  // {
  //   path: 'latestChanges',
  //   name: 'LatestChanges',
  //   component: () => import( '../views/LatestChanges.vue')
  // },
  {
    path: '/request/:id',
    name: 'RequestDetails',
    props: true, 
    component: () => import( '../views/RequestDetails.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
