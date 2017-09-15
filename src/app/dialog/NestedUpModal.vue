<template>
<el-dialog title="提示" :visible.sync="visible" size="small" :modal-append-to-bod="false">
  <h1>第一个dialog</h1>
  <el-button type="text">点击打开 Dialog</el-button>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
</el-dialog>
</template>
<script>
export default {
  data () {
    return {
      visible: false
    }
  },

  methods: {
    init () {
      this.visible = true
    }
  }
}
</script>
