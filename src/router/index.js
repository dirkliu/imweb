import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import User from '@/components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/user',
      component: User
    }
  ]
})
