// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from './router'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vonic from 'vonic'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios

import routes from './router/index.js'

var router = new VueRouter({
  // mode: 'history',
  routes: routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

/* eslint-disable no-new */
new Vue(Vonic.app, {
  router,
  render: h => h(App)
}).$mount('#app');
