<template>
  <div>
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
      <h1 v-if="token">Da</h1>
      {{token}}
      {{this.$store.state.token}}
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Home",
        data() {
            return {
            // token : this.$store.state.token
            }
        },
        computed: mapState([
            'token'
        ]),
        methods: {
            goLogout() {
                // localStorage.removeItem('user-token')
                this.$store.commit('logout')
                // console.log("logout was successful")
                this.$router.push('/')
                // axios.post("http://localhost:8000/api/v1/rest-auth/login/", {
                //         'username': this.username,
                //         'password': this.password,
                //     }).then(resp => {
                //         const token = resp.data.token
                //         localStorage.setItem('user-token', token)
                //         this.$store.state.token = token
                //         return resp
                //     }).catch(err => {
                //     // eslint-disable-next-line
                //     console.log(err.response);
                // });
            }
        }
    }
</script>

<style scoped>
</style>