import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '../app/home/home.router'
import animateRouter from '../app/animate/animate.router'
import userRouter from '../app/user/user.router'
import dragRouter from '../app/drag/drag.router'
import dialogRouter from '../app/dialog/dialog.router'
import routesRouter from '../app/routes/routes.router'
import lifecycleRouter from '../app/lifecycle/lifecycle.router'
import pluginsRouter from '../app/plugins/plugins.router'
import componentsRouter from '../app/components/components.router'
import downloadRouter from '../app/download/download.router'

Vue.use(Router)

export default new Router({
  routes: [
    homeRouter,
    animateRouter,
    userRouter,
    dragRouter,
    dialogRouter,
    routesRouter,
    lifecycleRouter,
    pluginsRouter,
    componentsRouter,
    downloadRouter
  ]
})
