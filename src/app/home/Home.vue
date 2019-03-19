<template>
  <div>
    <button type="button" title="add" @click="onAdd">+</button>
    <el-button type="primary" @click="sendMessage()">发送消息</el-button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        randomList: [
          {
            time: new Date().toLocaleString(),
            number: Math.random()
          }
        ],
        ws: new WebSocket('ws://localhost:8181')
      }
    },

    methods: {
      onAdd () {
        // this.randomList.unshift({number: Math.random(), time: new Date().toLocaleString()})
        this.randomList.unshift({time: new Date().toLocaleString()})
      },

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
