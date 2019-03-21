<template>
  <div class="home-page">
    <button type="button" title="" @click="sendMessage()">发送消息</button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        ws: new WebSocket('ws://localhost:8181')
      }
    },

    methods: {
      sendMessage () {
        console.log('sendMessage:')
        this.ws.send('sendMessage' + Math.random())
      }
    },

    created () {
      this.ws.onopen = e => {
        console.log('Connection to server opened:', e)
      }
      this.ws.onmessage = e => {
        console.log('on message:', e.data)
      }
    }
  }
</script>
