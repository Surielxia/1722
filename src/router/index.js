import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details/index'
import Index from '@/pages/index'
import City from '@/pages/city'
import Order from '@/pages/order/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})
