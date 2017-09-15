import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import user from '@/components/user.vue'
import json from '@/components/json.vue'
import animate from '@/components/Animate'
import drag from '@/components/Drag.vue'
import menu from '@/components/Menu.vue'
import dialog from './app/dialog/Dialog.vue'
import routes from './app/routes/Routes.vue'

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
      path: '/menu',
      name: '/menu',
      component: menu
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/animate',
      component: animate
    },
    {
      path: '/drag',
      component: drag
    }, {
      path: '/dialog',
      component: dialog
    }, {
      path: '/routes',
      component: routes
    }
  ]
})
