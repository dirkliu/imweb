import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '../app/home/home.router'
import formRouter from '../app/form/form.router'

Vue.use(Router)

export default new Router({
  routes: [
    homeRouter,
    formRouter
  ]
})
