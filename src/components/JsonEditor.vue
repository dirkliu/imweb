<template>
  <div class="json-editor-container">
    <div class="tree-mode"></div>
    <div class="code-mode"></div>
  </div>
</template>

<script>
  import 'jsoneditor/dist/jsoneditor.css'
  import JsonEditor from 'jsoneditor/dist/jsoneditor.min'

  export default {
    mounted () {
      var json = {
        name: 'liuqi',
        age: '32'
      }
      this.treeEditor = new JsonEditor(this.$el.getElementsByClassName('tree-mode')[0])
      this.treeEditor.set(json)

      this.codeEditor = new JsonEditor(this.$el.getElementsByClassName('code-mode')[0], {
        'mode': 'code'
      })
      this.codeEditor.set(json)

      // this.treeEditor.get()
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
</style>
