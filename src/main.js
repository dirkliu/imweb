// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import './themes/ele-orange/index.css'
Vue.use(ElementUI)

import store from './store'
/* eslint-disable no-new */
import TestPlugin from './app/plugins/test.plugin'
Vue.use(TestPlugin)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
