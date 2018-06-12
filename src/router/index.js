import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import shopcart from '@/components/shopcart'
import showecharts from '@/components/showecharts'
import sort from '@/components/sort'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: shopcart
    },
    {
      path: '/showecharts',
      component: showecharts
    },
    {
      path: '/sort',
      component: sort
    }
  ]
})
