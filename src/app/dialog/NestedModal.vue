<template>
<el-dialog title="提示" :visible.sync="visible" size="large" :modal="false" class="bottom-dialog">
  <h1>第一个dialog</h1>
  <el-button type="text" @click="showModal">点击打开 Dialog</el-button>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
  <nested-up-modal ref="nestedUpModal"></nested-up-modal>
</el-dialog>
</template>
<script>
import NestedUpModal from './NestedUpModal.vue'
export default {
  data () {
    return {
      visible: false
    }
  },

  components: {
    NestedUpModal
  },

  methods: {
    init () {
      this.visible = true
    },

    showModal () {
      this.$refs.nestedUpModal.init()
    }
  }
}
</script>
<style>
.bottom-dialog{
  height:50%;
}
</style>
