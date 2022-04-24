<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld @logCount="logCount" :msg="msg" ref="hw" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  inject: ['author'],
  data() {
    return {
      view: 'Home',
      msg: 'Hello Vue',
    }
  },
  methods: {
    logCount(data) {
      console.log(data);
    }
  },
  mounted () {
    console.log(this.$refs.hw.view);

    console.log(this.author);
  },
  components: {
    HelloWorld
  }
}
</script>
