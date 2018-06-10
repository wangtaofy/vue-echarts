import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import shopcart from '@/components/shopcart'

export default new Router({
  routes: [
    {
      path: '/',
      component: shopcart
    }
  ]
})
