import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import FirstPage from '@/pages/firstPage'
import VipPage from '@/pages/VIP'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'firstPage',
        component: FirstPage
      },{
        path: 'vip',
        name: 'vipPage',
        component: VipPage
      }]
    },
  ]
})
