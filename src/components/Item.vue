<template>
  <div class="box">
      <img class="img" :src="img" />
      <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ['title', 'img'],
}
</script>

<style scoped>
.box {
  width: 10rem;
  height: 10rem;
  text-align: center;
}

.img {
  width: 10rem;
  height: 10rem;
}
</style>
