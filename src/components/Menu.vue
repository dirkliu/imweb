<template>
<div class="vertical-menu-demo">
    <h2>菜单侧边栏示例</h2>
    <el-row>
      <el-col :span="8">
        <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :default-openeds="['1']">
          <el-submenu index="1" key="sub1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="test" key="sub2">
            <template slot="title"><i class="el-icon-message"></i>导航test</template>
            <el-menu-item index="1-1">选项test1</el-menu-item>
            <el-menu-item index="1-2">选项test2</el-menu-item>
            <el-menu-item index="1-3">选项test3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</div>
</template>

<script>
  export default {
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
