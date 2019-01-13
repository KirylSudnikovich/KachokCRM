<template>
    <div class="columns" style="margin-top: 100px;">
        <div class="col-md-4"/>
        <div class="col-md-4 text-center">
            <div v-if="!loading">
                <input type="text" v-model="username" class="form-control">
                <input type="password" v-model="password" class="form-control">
                <button @click="goLogin" class="form-control">Send</button>
            </div>
            <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        </div>
        <div class="col-md-4"/>
    </div>
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    import axios from "axios";

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                username: '',
                password: '',
                err: '',
                loading: false,
                color: '#38b230',
                size: '45px'
            }
        },
        components: {
            PulseLoader
        },
        methods: {
            goLogin() {
                this.loading = true
                axios.post("http://localhost:8000/api/v1/rest-auth/login/", {
                        'username': this.username,
                        'password': this.password,
                    }).then(resp => {
                        this.loading = false
                        const token = resp.data.token
                        this.$store.commit('login',token)
                        this.$router.push('/')
                        // localStorage.setItem('user-token', token)
                        // this.$store.state.token = token
                        return resp
                    }).catch(err => {
                    // eslint-disable-next-line
                    this.loading = false
                    this.err = err;
                    // console.log(err.response);

                });
            }
        }
    }
</script>

<style scoped>

</style>
