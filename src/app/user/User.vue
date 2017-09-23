<template>
<div>
<header>这是用户页面: {{name}}</header>
<div><button type="button" @click="addCount()">change</button></div>
<time>{{time}} {{count}}</time>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Jason Liu',
      time: new Date().toLocaleString()
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    }
  }
}
</script>
