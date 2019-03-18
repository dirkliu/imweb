<template>
<div id="app">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="home"><router-link :to="{name: 'home'}">首页</router-link></el-menu-item>
    <el-menu-item index="form"><router-link to="form">表单</router-link></el-menu-item>
  </el-menu>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      activeIndex: 'home'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
