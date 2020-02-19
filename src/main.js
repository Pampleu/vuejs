// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagerecherche from '@/components/Pagerecherche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/Pagerecherche', 
      name: 'Pagerecherche', 
      component: Pagerecherche
    }
  ]
})