<template>
  <h1>Dynamicroute</h1>
  <div>{{query}}</div>
</template>

<script>
export default {
  props:['query'],
  name: "DynamicRoute",
  data() {
    return {

    }
  },
  methods: {
    loadNewRoutes(route) {
      const routeId = route.params.routeId;
      console.log("RouteID: ",routeId);
    }
  },
  created() {
    this.loadNewRoutes(this.$route)
  },
  watch: {
    $route(newRoute) {
      this.loadNewRoutes(newRoute)
    }
  }
}
</script>

<style scoped>

</style>
