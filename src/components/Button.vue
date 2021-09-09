<template>
  <button @click="navClick(href)">{{title}}</button>
</template>

<script>
export default {
  name: "Button",
  props:['title','href'],
  methods: {
    navClick(href) {
      console.log('href:',href)
    }
  }
}
</script>

<style scoped>

</style>
