<template>
  <div class="drag">
    <h2>拖放实验</h2>
    <ul>
      <li v-for="(task, index) in tasks"
          :id="index"
          :style="{'background-position': 'center', 'background-image': 'url('+ task.img +')'}" v-drag-and-drop>
        <input type="checkbox" name="completed[]" value="1" v-bind:checked="task.completed">
        <strong>{{ task.title }}</strong>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tasks: [
          {id: 96, 'title': 'Task 8', 'completed': false, img: 'https://ps.ssl.qhimg.com/sdmt/100_135_100/t01df1c3345e091e95f.gif'},
          {'id': 12, 'title': 'Task 1', 'completed': true, img: 'https://ps.ssl.qhimg.com/sdmt/183_135_100/t01f0341330ab8ad809.jpg'},
          {'id': 24, 'title': 'Task 2', 'completed': false, img: 'https://ps.ssl.qhimg.com/sdmt/183_135_100/t01f0341330ab8ad809.jpg'},
          {'id': 36, 'title': 'Task 3', 'completed': true, img: 'https://ps.ssl.qhimg.com/sdmt/182_135_100/t01fb01d829f489595f.jpg'},
          {'id': 48, 'title': 'Task 4', 'completed': false, img: 'http://p5.so.qhimgs1.com/bdr/_240_/t0102d8f5b3fb0bee5b.jpg'},
          {'id': 60, 'title': 'Task 5', 'completed': true, img: 'http://p1.so.qhmsg.com/bdr/_240_/t015b68d918d6833786.jpg'},
          {'id': 72, 'title': 'Task 6', 'completed': false, img: 'http://p4.so.qhimgs1.com/bdr/_240_/t013402563551e8b74a.jpg'},
          {'id': 84, 'title': 'Task 7', 'completed': true, img: 'http://p5.so.qhimgs1.com/bdr/_240_/t01cc9d2315ff47684b.jpg'},
          {'id': 0, 'title': 'Task 0', 'completed': false, img: 'http://p3.so.qhimgs1.com/bdr/_240_/t01b62b0c70afce5f33.gif'},
          {'id': 108, 'title': 'Task 9', 'completed': true, img: 'http://p5.so.qhimgs1.com/bdr/_240_/t01b727795ea572c24b.jpg'}
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  ul> li {
    width:100px;
    height: 100px;
    margin: 5px;
    float:left;
  }
</style>
