import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import shopcart from '@/components/shopcart'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: shopcart
    }
  ]
})
