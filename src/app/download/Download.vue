<template>
  <div class="download-page">
    <el-button type="primary" @click="onDownload">开始下载</el-button>
    <form :action="downloadUrl" :method="method">
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        downloadUrl: 'http://localhost/download/',
        method: 'get'
      }
    },

    methods: {
      onDownload () {
        this.$el.getElementsByTagName('form')[0].submit()
      }
    }
  }
</script>
