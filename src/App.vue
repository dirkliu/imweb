<template>
<div id="app">
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
  height: 100vh;
  background-color: #efefef;
}
</style>
