<template>
  <div class="components-list">
    <h1>海量数据分页选择下拉框</h1>
    开始时间：{{startTime}}<br/>
    结束时间：{{endTime}}<br>
    耗时：{{spendTime}} ms
    <select v-model="selectId">
      <option v-for="item in list" :value="item.id" :key="item.id">{{item.name}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        startTime: new Date(),
        endTime: new Date(),
        selectid: '',
        list: []
      }
    },

    computed: {
      spendTime () {
        return this.endTime - this.startTime
      }
    },

    created () {
      // this.startTime = new Date()
      // for (var i = 0; i < 5000; i++) {
      //   this.list.push({
      //     id: i,
      //     name: '第' + i + '个'
      //   })
      // }
      // this.endTime = new Date()
      // console.log('插时：', this.endTime - this.startTime)
    }
  }
</script>
