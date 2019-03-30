import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '../app/home/home.router'

Vue.use(Router)

export default new Router({
  routes: [
    homeRouter,
    {
    	path: '/login'
    }
  ]
})
