import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
