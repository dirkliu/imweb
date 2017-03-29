import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import user from '@/components/user.vue'
import json from '@/components/json.vue'
import form from '@/components/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/json',
      name: 'json',
      component: json
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/user',
      component: user
    }
  ]
})
