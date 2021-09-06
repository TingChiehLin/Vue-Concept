<template>
  <div>
    <button @click="incrementCount">Click Me</button>
    <h3>{{ count }} times</h3>
  </div>
</template>

<script>
import {CounterMixin} from '../mixins/counter';
export default {
  name: "Count",
  mixins:[CounterMixin]
}
</script>

<style scoped>

</style>
