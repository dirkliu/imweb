// import Home from './Home.vue'
const Login = () => import('./Login.vue')

export default {
  path: '/login',
  name: 'login',
  component: Login
}
