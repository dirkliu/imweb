<template>
<div class="drag">
  <h2>拖放实验</h2>
  <ul>
    <draggable
      v-model="tasks"
      element="ul"
      @start="onStart"
      @choose="onChoose"
      @sort="onSort"
      @update="onUpdate"
      @end="onEnd">
      <li v-for="(task, index) in tasks" :key="index" :id="index" :style="{'background-position': 'center', 'background-image': 'url('+ task.img +')'}">
        <input type="checkbox" name="completed[]" value="1" v-bind:checked="task.completed">
        <strong>{{ task.title }}</strong>
      </li>
    </draggable>
  </ul>
</div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'drag',
  data () {
    return {
      tasks: [{
        id: 96,
        'title': 'Task 8',
        'completed': false,
        img: 'https://ps.ssl.qhimg.com/sdmt/100_135_100/t01df1c3345e091e95f.gif'
      }, {
        'id': 12,
        'title': 'Task 1',
        'completed': true,
        img: 'https://ps.ssl.qhimg.com/sdmt/183_135_100/t01f0341330ab8ad809.jpg'
      }]
    }
  },

  components: {
    draggable
  },

  methods: {
    onStart (e) {
      console.log('onStart:', e)
    },

    onSort (e) {
      console.log('onSort:', e)
    },

    onUpdate (e) {
      console.log('onUpdate:', e)
    },

    onEnd (e) {
      console.log('onEnd:', e)
    },

    onChoose (e) {
      console.log('onChoose:', e)
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;

  li {
    width: 100px;
    height: 100px;
    margin: 5px;
    float: left;
  }
}
</style>
