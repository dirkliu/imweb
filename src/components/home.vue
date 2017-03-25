<template>
  <div></div>
  <json-editor v-model="json"></json-editor>
</template>

<script>
  import jsonEditor from './JsonEditor.vue'

  export default {
    data () {
      return {
        json: {
          name: 'Jason Kidd'
        }
      }
    },
    components: {
      jsonEditor
    }
  }
</script>
