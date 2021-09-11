<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
</template>

<script>
import ActiveUser from "./ActiveUser";
import UserData from "./UserData";

export default {
  name: "Home",
  components: {
    ActiveUser,
    UserData
  },
  data() {
    return {
      user: {
        name: 'Jay Lin',
        age: 18
      }
    }
  },
  methods: {
    setUserData(name, age) {
      console.log(name, age)
      this.user = {
        name: name,
        age: +age
      };
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
