<template>
<div class="lifecycle-page">
  <p>子组件</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'child component life cycle'
    }
  },

  created () {
    console.log(this.title + ' created')
  },

  mounted () {
    console.log(this.title + ' mounted')
  }
}
</script>
