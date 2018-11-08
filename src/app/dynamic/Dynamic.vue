<template>
  <div class="components-list">
   <h1>动态组件</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div v-if="activeName === 'first'">
          <user-manage></user-manage>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <div v-if="activeName === 'second'">
          <config-manage></config-manage>
        </div>       
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first',
        userActive: false
      }
    },

    components: {
      'user-manage': () => import('./UserManage.vue'),
      'config-manage': () => import('./ConfigManage.vue')
    },

    methods: {
      handleClick (tab, event) {
      }
    }
  }
</script>
