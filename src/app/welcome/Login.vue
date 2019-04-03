<template>
<div class="login-page">
  <h2>用户登录页</h2>
	<form class="qi-form">
		<div class="form-item">
      <input v-model="formData.user" placeholder="请输入用户名">
    </div>
    <div class="form-item">
      <input v-model="formData.password" placeholder="请输入密码">
    </div>
    <div class="form-item">
      <button type="button">取消</button>
      <button type="button" @click="onSave">确定</button>
    </div>
	</form>
</div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          user: '',
          password: ''
        }
      }
    },

    methods: {
      onSave () {
        console.log('onSave')
        this.$request('post', '/api/imweb/login', this.formData).then(resp => {
          console.log('resp:', resp)
        })
      }
    }
  }
</script>

<style lang="scss">
.login-page {
  padding: 20vh 0;
}
.qi-form {
  width: 50vw;
  margin: 0 auto;
}
.form-item {
  margin-bottom: 2vh
}
</style>
