<template>
  <div>
    <p>
      <label>name:</label>
      <input type="text" v-model="form.name"/>{{form.name}}
      <button type="button" @click="onChange('aaa')">aaa</button>
    </p>
    <p>
      <label>nested:</label> {{nested}}<button type="button" @click="changeNested('nested')">nested</button>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
        }
      }
    },

    methods: {
      onChange (name) {
        // this.form.name = name
        // this.$set(this.form, 'name', name)
        this.form = Object.assign({}, this.form, {name: name})
      },

      changeNested (name) {
        // this.$set(this.$data, 'nested', name)
      }
    }
  }
</script>
