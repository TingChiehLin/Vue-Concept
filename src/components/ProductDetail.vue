<template>
  <h4 class="red">Product Details</h4>
  <div>{{productId}}</div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    productId: {
      type: String,
      require: true
    }
  },
  data() {
    return ""
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
