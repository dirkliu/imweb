import Vue from 'vue'
import Router from 'vue-router'
import JsonEditor from '@/components/JsonEditor.vue'
import User from '@/components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: JsonEditor
    },
    {
      path: '/user',
      component: User
    }
  ]
})
