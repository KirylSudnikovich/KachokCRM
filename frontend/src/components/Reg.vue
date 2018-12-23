<template>
    <div class="columns" style="margin-top: 100px;">
        <div class="col-md-4"/>
        <div class="col-md-4 text-center">
            <!--<g-signin-button-->
            <!--v-if="isEmpty(user)"-->
            <!--:params="googleSignInParams"-->
            <!--@success="onGoogleSignInSuccess"-->
            <!--@error="onGoogleSignInError"-->
            <!--&gt;-->
            <!--<button class="btn btn-block btn-success">Google Signin</button>-->
            <!--</g-signin-button>-->
            <!--<user-panel v-else :user="user"></user-panel>-->
            <input type="text" v-model="username" class="form-control">
            <input type="email" v-model="email" class="form-control">
            <input type="password" v-model="password" class="form-control">
            <button @click="goLogin" name="sign_up" class="form-control">Send</button>
        </div>
        <div class="col-md-4"/>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Reg",
        data() {
            return {
                email: '',
                username: '',
                password: '',
            }
        },
        methods: {
            goLogin() {
                axios.post("http://localhost:8000/api/v1/rest-auth/registration/", {
                        'email': this.email,
                        'username': this.username,
                        'password1': this.password,
                        'password2': this.password
                    }
                ).catch(err => {
                    console.log(err.response);
                });
            }
        }
    }


</script>

<style scoped>

</style>