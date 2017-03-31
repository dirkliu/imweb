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
    }
  }
</script>
