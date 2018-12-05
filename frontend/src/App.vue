<template>
  <div id="app">
    <div class="container">
      <div class="columns" style="margin-top: 100px;">
        <div class="col-5"></div>
        <div class="column col-2 centered">
          <!-- Если user - пустой объект, то отображаем кнопку
          входа через Google-->
          <g-signin-button
            v-if="isEmpty(user)"
            :params="googleSignInParams"
            @success="onGoogleSignInSuccess"
            @error="onGoogleSignInError"
          >
            <button class="btn btn-block btn-success">Google Signin</button>
          </g-signin-button>
          <user-panel v-else :user="user"></user-panel>
        </div>
        <div class="col-5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import UserPanel from "@/components/UserPanel";

export default {
  name: "App",
  components: {
    UserPanel
  },
  data() {
    return {
      user: {},
      googleSignInParams: {
        client_id: "258923662369-g75fs74i6rovf6h8lba9eugc3r4d3edr"
      }
    };
  },
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
        });
    },
    isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }
  }
};
</script>
