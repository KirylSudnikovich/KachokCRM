<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      username: '',
      password: '',
      // user: {},
      // googleSignInParams: {
      //   client_id: "258923662369-g75fs74i6rovf6h8lba9eugc3r4d3edr"
      // }
    };
  },
  /* eslint-disable */
  methods: {
    onGoogleSignInSuccess(resp) {
      const token = resp.Zi.access_token;
      // После успешного входа через Google,
      // отправляем токен доступа на бэкэнд и получаем взамен
      // пользователя и JWT токен
      // P.S. JWT токен в нашем примере не нужен, поэтому его не сохраняем
      axios
        .post("http://localhost:8000/auth/google/", {
          access_token: token
        })
        .then(resp => {
          this.user = resp.data.user;
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    onGoogleSignInError(error) {
      console.log("OH NOES", error);
    },
    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
  }
};
</script>
