<template>
  <button @click="sayHiFC">test</button>
  <h1>This is Home page</h1>
  <h1 v-color:red>Global font size</h1>
  <h1 v-color:yellow>Global font size</h1>
  <h1 v-color:purple>Global font size</h1>

  <click-counter></click-counter>
  <MouseOver/>
</template>

<script>

import useMessage from '../hook/message';
import MouseOver from "./MouseOver";
import { inject } from 'vue';

export default {
  name: "Home",
  components: {
    MouseOver
  },
  created() {
    console.log('Hey from the component.')
  },
  data() {
    return {
      message: 'Hi Jay Lin'
    }
  },
  setup() {
    useMessage().showMessage();

    const sayHiFC= inject('sayHiFC');

    return {
      sayHiFC
    }
  },
  methods: {
    sayHi() {

    }
  }
}
</script>

<style scoped>

</style>
