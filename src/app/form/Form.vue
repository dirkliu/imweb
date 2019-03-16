<template>
  <div class="form-page">
    <el-form :model="formData" label-width="120px" ref="form" :rules="rules">
      <el-form-item label="验证测试1" prop="name" v-if="tab ==='1'">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="验证测试2" prop="name" v-if="tab ==='2'">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="文件上传">
        <el-upload
          action="/api/upload"
          :show-file-list="false"
          :on-success="onUploadSuccess">
          <el-button type="primary" size="small">上传图片</el-button>
        </el-upload>
        <img v-if="formData.img" :src="formData.img">
      </el-form-item>
      <el-form-item>
        <el-button type="default" size="small" @click="changeName">change</el-button>
        <el-button type="primary" size="small" @click="submit">post</el-button>
        <el-button type="default" size="small" @click="tab ='1'">1</el-button>
        <el-button type="default" size="small" @click="tab ='2'">2</el-button>
        <el-button type="default" size="small" @click="addRules">Add Rules</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          img: ''
        },
        tab: '1',
        rules: {
        }
      }
    },

    methods: {
      changeName () {
        this.$set(this.formData, 'name', 'name' + Math.random())
        // this.$refs.form.validate()
      },

      addRules () {
        this.rules = {
          name: [
            {required: true, message: '请输入', trigger: 'change'}
          ]
        }
      },

      onUploadSuccess (resp) {
        if (resp.data) {
          this.formData.img = resp.data.path
        }
      },

      submit () {
        this.$refs.form.validate()
      }
    }
  }
</script>
