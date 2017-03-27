<template>
  <div>
    <div class="jsoneditor-vue"></div>
    <div class="btns"><button type="button" @click="onSave()" :disabled="error">保存</button></div>
  </div>
</template>

<script>
  import 'jsoneditor/dist/jsoneditor.css'
  import JsonEditor from 'jsoneditor/dist/jsoneditor.min'

  export default {
    props: ['value'],
    data () {
      return {
        editor: null,
        error: false
      }
    },
    mounted () {
      var self = this
      var options = {
        mode: 'code',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        onChange () {
          try {
            var json = self.editor.get()
            self.error = false
          } catch (e) {
            console.log('e:', e)
            self.error = true
          }
          !self.error && self.$emit('input', json)
        }
      }
      this.editor = new JsonEditor(this.$el.querySelector('.jsoneditor-vue'), options, this.value)
    },
    methods: {
      onSave () {
        console.log('onSave!')
      }
    }
  }
</script>

<style>
  .ace_line_group {
    text-align: left;
  }

  .json-editor-container {
    display: flex;
    width: 100%;
  }

  .json-editor-container .tree-mode {
    width: 50%;
  }

  .json-editor-container .code-mode {
    flex-grow: 1;
  }

  code {
    background-color: #f5f5f5;
  }
</style>
