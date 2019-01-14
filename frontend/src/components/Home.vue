<template>
  <div>
    <div v-if="!this.$store.state.token">
      <nav class="navbar navbar-expand navbar-dark bg-dark" style="height: 60px">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
            <div v-if="!token">
              <button class="form-control my-2 my-sm-0" type="submit">
                <router-link to="/reg">Sign Up</router-link>
              </button>
              <button class="form-control my-2 my-sm-0" type="submit">
                <router-link to="/login">Sign In</router-link>
              </button>
            </div>
            <button v-if="token" @click="goLogout" class="form-control">Log out</button>
          </div>
        </div>
      </nav>
      <div class="container">
        <h1 v-if="token">Пользователь авторизован</h1>
        <h1 v-else>Пользователь не авторизован</h1>
      </div>
    </div>
    <section v-if="this.$store.state.token" class="content">
      <div class="row">
        <div class="col-md-2 col-width-right-border">
          <home-sidebar></home-sidebar>
        </div>
        <div class="col-md-10">
          {{this.$store.state.username}}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeSidebar from './HomeSidebar'

export default {
  name: "Home",
  components: {
    'home-sidebar' : HomeSidebar
  },
  data() {
    return {
    };
  },
  computed: mapState(["token"])
};
</script>

<style scoped>
</style>