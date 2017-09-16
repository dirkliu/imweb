<template>
  <div class="routes-page">
    嵌套路由演示:验证路由也可以模块化
    <ul>
      <li><router-link :to="{name: 'routeChild1'}">子路由1</router-link></li>
      <li><router-link :to="{name: 'routeChild2'}">子路由2</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
