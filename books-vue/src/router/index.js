import Vue from 'vue'
import VueRouter from 'vue-router'
import book from '../views/books.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: book
  },
  {
    path: '/info/:id',
    name: 'Info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bookInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
