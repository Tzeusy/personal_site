import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import All from './views/All.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all',
      name: 'all',
      component: All
    },
    {
      path: '/category/:cat',
      name: 'blog',
      component: Blog
    }
  ]
})
