<template>
<div id="app">
  <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="home"><router-link :to="{name: 'home'}">首页</router-link></el-menu-item>

    <el-submenu index="effect">
      <template slot="title">特效</template>
      <el-menu-item index="drag"><router-link to="drag">拖放</router-link></el-menu-item>
      <el-menu-item index="animate"><router-link to="animate">animate</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="user"><router-link to="user">用户</router-link></el-menu-item>
    <el-menu-item index="menu"><router-link to="menu">菜单</router-link></el-menu-item>
    <el-menu-item index="dialog"><router-link to="dialog">dialog</router-link></el-menu-item>
    <el-menu-item index="dialog"><router-link to="routes">路由</router-link></el-menu-item>
    <el-menu-item index="lifecycle"><router-link to="lifecycle">lifecycle</router-link></el-menu-item>
    <el-menu-item index="plugins"><router-link to="plugins">plugins</router-link></el-menu-item>
    <el-menu-item index="plugins"><router-link to="components">组件</router-link></el-menu-item>
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
