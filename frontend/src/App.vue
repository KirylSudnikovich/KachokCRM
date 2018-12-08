p
<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark" style="height: 60px">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
                <div class="form-inline my-2 my-lg-0">
                    <!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">-->
                    <button class="form-control my-2 my-sm-0" type="submit"><router-link to="/reg">Sign Up</router-link></button>
                    <button class="form-control my-2 my-sm-0" type="submit">Sign In</button>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="columns" style="margin-top: 100px;">
            <div class="col-4"></div>
            <div class="column col-4 centered">
            <button class="form-control">
            <router-link :to="{ name: 'UserPanel' }">Home</router-link>
            </button>

            <button class="form-control">
            <router-link to="/reg">Reg</router-link>
            </button>
            <router-view></router-view>
            <!-- Если user - пустой объект, то отображаем кнопку
            входа через Google-->
            <!--<g-signin-button-->
            <!--v-if="isEmpty(user)"-->
            <!--:params="googleSignInParams"-->
            <!--@success="onGoogleSignInSuccess"-->
            <!--@error="onGoogleSignInError"-->
            <!--&gt;-->
            <!--<button class="btn btn-block btn-success">Google Signin</button>-->
            <!--</g-signin-button>-->
            <!--<user-panel v-else :user="user"></user-panel>-->
            </div>
            <div class="col-4"></div>
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
                        console.log(err.response)
                    });
            },
            onGoogleSignInError(error) {
                console.log('OH NOES', error)
            },
            isEmpty(obj) {
                return Object.keys(obj).length === 0;
            }
        }
    };
</script>
