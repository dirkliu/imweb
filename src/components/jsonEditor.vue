<template>
  <div id="jsoneditor-vue"></div>
</template>

<script>
  import 'jsoneditor/dist/jsoneditor.css'
  import JsonEditor from 'jsoneditor/dist/jsoneditor.min'

  export default {
    props: ['value'],
    data () {
      return {
        jsons: this.value
      }
    },
    mounted () {
      var options = {
        mode: 'code',
        modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
        onError: function (err) {
          alert(err.toString())
        },
        onModeChange: function (newMode, oldMode) {
          console.log('Mode switched from', oldMode, 'to', newMode)
        }
      }
      this.editor = new JsonEditor(this.$el, options, this.value)
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
