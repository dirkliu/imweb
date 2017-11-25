<template>
<div class="lifecycle-page">
  <h2>生命周期演示</h2>
  <div>beforeCreate之前，是没有data属性的</div>
  <lifecycle-child></lifecycle-child>
</div>
</template>

<script>
import LifecycleChild from './LifecycleChild.vue'
export default {
  data () {
    return {
      title: 'parent component life cycle'
    }
  },

  components: {
    LifecycleChild
  },

  methods: {
    showTest (title) {
      console.log('test:' + title)
    }
  },

  beforeCreate () {
    console.log('this beforeCreate:', this)
    console.log('beforeCreate:', this.title)
  },

  created () {
    console.log('created:', this.title)
    this.showTest('created')
  },

  monted () {
    console.log('mounted:', this.title)
    this.showTest('mounted')
  }
}
</script>
