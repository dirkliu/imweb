<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'home'}">首页</router-link>
      <router-link to="user">用户</router-link>
      <router-link to="json">json</router-link>
      <router-link to="form">form</router-link>
      <router-link to="animate">animate</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
