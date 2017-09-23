<template>
  <div id="demo">
    <h2><a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank">vue过渡状态</a></h2>
    <button v-on:click="show = !show">transition</button>
    <transition name="fade">
      <p v-if="show">opacity</p>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .9s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
