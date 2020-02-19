import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Pagerecherche from '@/components/Pagerecherche'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/pagerecherche',
      name: 'pagerecherche',
      component: Pagerecherche
    },
  ]
})
