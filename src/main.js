// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import './assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Store from './store'
import 'styles/base/reset.css'
import 'styles/base/border.css'
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

const bus = new Vue()
Vue.prototype.$bus = bus

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  Store,
  template: '<App/>',
  components: { App }
})
