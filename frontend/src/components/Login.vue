<template>
    <div class="columns" style="margin-top: 100px;">
        <div class="col-md-4"/>
        <div class="col-md-4 text-center">
            <input type="text" v-model="username" class="form-control">
            <input type="password" v-model="password" class="form-control">
            <button @click="goLogin" class="form-control">Send</button>
        </div>
        <div class="col-md-4"/>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                username: '',
                password: '',
            }
        },
        methods: {
            goLogin() {
                axios.post("http://localhost:8000/api/v1/rest-auth/login/", {
                        'username': this.username,
                        'password': this.password,
                    }).then(resp => {
                        const token = resp.data.token
                        localStorage.setItem('user-token', token)
                        resolve(resp)
                    }).catch(err => {
                    console.log(err.response);
                });
            }
        }
    }
</script>

<style scoped>

</style>