<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="products">Product List</router-link>
        </li>
        <li>
          <router-link to="users">Users</router-link>
        </li>
        <li>
          <router-link to="userform">User Form</router-link>
        </li>
        <li>
          <router-link to="searchpage">Searchpage</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>
