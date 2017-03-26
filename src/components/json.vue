<template>
  <div>
    <json-editor v-model="json"></json-editor>
  </div>
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
