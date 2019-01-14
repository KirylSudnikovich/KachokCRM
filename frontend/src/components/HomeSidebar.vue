<template>
    <ul class="nav nav-pills nav-stacked HomeSidebar">
        <li v-if="!this.$store.state.token"><router-link to="/login">Register</router-link></li>
        <li v-if="!this.$store.state.token"><router-link to="/login">Login</router-link></li>
        <li v-else @click="goLogout">Logout</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
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

<style scoped>
    .HomeSidebar {
      height: 100%;
      width: 160px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      padding-top: 20px;
    }
    .HomeSidebar li {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    }

    .HomeSidebar li:hover {
    color: #f1f1f1;
    }
</style>