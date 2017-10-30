// import Home from './Home.vue'
const Home = () => import('./Home.vue')

export default {
  path: '/',
  name: 'home',
  component: Home
}
