<template>
<div class="lifecycle-page">
  <h2>生命周期演示</h2>
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

  created () {
    console.log(this.title + ' created')
  },

  mounted () {
    console.log(this.title + ' mounted')
  }
}
</script>
