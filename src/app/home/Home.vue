<template>
  <div class="home-page">
    <el-button type="primary" @click="sendMessage()">发送消息</el-button>
    <ul>
      <li v-for="(item, index) in messageList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        messageList: [],
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
        this.messageList.push(e.data)
      }
    }
  }
</script>
