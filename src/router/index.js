import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import User from '@/components/user/user'
import Detail from '@/components/detail/detail'

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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
