import routes from './Routes.vue'
import routeChild1 from './routeChild1.js'
import routeChild2 from './routeChild2.js'

export default {
  path: '/routes',
  component: routes,

  children: [routeChild1, routeChild2]
}
