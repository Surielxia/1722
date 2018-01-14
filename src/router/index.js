import Vue from 'vue'
import Router from 'vue-router'
import DayTour from '@/pages/DayTour/DayTour.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DayTour',
      component: DayTour
    }
  ]
})
