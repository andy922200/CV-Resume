import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from '../views/IndexPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/*',
    name: 'IndexPage',
    component: indexPage,
  },
]

const router = new VueRouter({
  routes,
  base: '/',
})

export default router
