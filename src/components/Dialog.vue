<template>
  <div class="demo-page">
    <h1>dialog演示</h1>
    <p>此例可以证实：element-ui的dialog组件是不能嵌套使用的</p>
    <el-button type="text" @click="showModal">点击打开 Dialog</el-button>
    <nested-modal ref="nestedModal"></nested-modal>
  </div>
</template>
<script>
  import NestedModal from './NestedModal.vue'
  export default {
    data () {
      return {}
    },

    components: {
      NestedModal
    },

    methods: {
      showModal () {
        this.$refs.nestedModal.init()
      }
    }
  }
</script>
