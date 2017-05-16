<template>
<div>
  <vue-json-editor v-model="json"></vue-json-editor>
</div>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'

export default {
  data () {
    return {
      json: {
        name: 'Jason Kidd'
      }
    }
  },
  components: {
    vueJsonEditor
  }
}
</script>
