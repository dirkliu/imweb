<template>
  <div class="home-page">
    <div class="message-box"></div>
    <span class="send-btn" @click="sendMessage">Send</span>
  </div>
</template>

<script>
  const ws = new WebSocket('ws://localhost:3000')
  ws.addEventListener('open', function () {
    // ws.send('message')
    console.log('ws ready')
  })
  export default {
    data () {
      return {
        messageList: [],
        ws: ws
      }
    },

    methods: {
      sendMessage () {
        this.ws.send('a111让111111111111111111111111111111111dfasdfasfasfsafadsfasdfdasfdasfdasfasfdasfdasfdasfdasfdasfdasfeeefefasfa')
      }
    },

    created () {
      this.ws.onmessage = e => {
        console.log('on message:', e.data)
        this.messageList.push(e.data)
      }

      this.ws.onclose = e => {
        console.log('ws onclose:', e)
      }
    }
  }
</script>

<style lang="scss">
.home-page {
  padding: 1vh;

  .message-box {
    height: 80vh;
    background-color: #fff;
  }
  .send-btn {
    display: block;
    width: 15vh;
    height: 15vh;
    line-height: 15vh;
    text-align: center;
    color: #fff;
    font-size: 3vh;
    border-radius: 10vh;
    position: absolute;
    bottom: 1vh;
    left: 50%;
    background-color: #f93;
    transform: translateX(-50%);
  }
}
</style>
