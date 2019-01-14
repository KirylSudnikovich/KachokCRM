<template>
    <ul class="nav nav-pills nav-stacked HomeSidebar">
        <li v-if="!this.$store.state.token"><router-link to="/login">Register</router-link></li>
        <li v-if="!this.$store.state.token"><router-link to="/login">Login</router-link></li>
        <li v-else @click="goLogout">Logout</li>
    </ul>
</template>


<script>
export default {

 methods: {
    goLogout() {
      this.$store.commit("logout");
    },
  }
}
</script>

