<template>
  <div>
    <button type="button" title="add" @click="onAdd">+</button>
    <ul>
      <li v-for="random in randomList">
        <b>time: {{random.time}}</b>,
        <i>number: {{random.number}}</i>
        <button type="button" @click="onChange(random)">change</button>
      </li>
    </ul>
    <p v-for="tag in tags">{{tag}}</p>
    <el-table
      :data="list"
      border
      style="width: 100%">
      <div v-for="tag in tags">
        <el-table-column
          :prop="tag"
          :label="tag">
        </el-table-column>
      </div>
    </el-table>
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
        tags: ['zxcv', 'xcv', 'abc', 'dev'],
        list: [
          {zxcv: 1, xcv: 2, abc: 3, dev: 4}
        ]
      }
    },

    methods: {
      onAdd () {
        // this.randomList.unshift({number: Math.random(), time: new Date().toLocaleString()})
        this.randomList.unshift({time: new Date().toLocaleString()})
      },
      onChange (random) {
        var newRandom = {
          time: new Date().toLocaleString(),
          number: Math.random()
        }
        Object.assign({}, random, newRandom)
      }
    },

    created () {
      var obj = {a: '1', b: '2', c: '3', d: '4'}
      console.log('obj values:', Object.values(obj))
      console.log('test:', TEST_ROOT)
    }
  }
</script>
