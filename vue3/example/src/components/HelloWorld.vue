<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn" @click="logCount">点我一下</button>
  </div>
</template>

<style>
.btn{
  width: 100px;
  height: 40px;
  border: none;
  color: #ffffff;
  background-color: #42b983;
}
.btn:hover{
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'HelloWorld',
  inject: ['author'],
  data() {
    return {
      view: 'HelloWorld',
      count: 0
    }
  },
  methods: {
    logCount() {
      this.count++;
      this.$emit('logCount', this.count);
    }
  },
  mounted () {
    console.log(this.$parent.view);
    console.log(this.$root.isRoot);

    console.log(this.author);
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
