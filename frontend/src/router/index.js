import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/reg',
            name: "Reg",
            component: Reg
        },
        {
            path: '/login',
            name: "Login",
            component: Login
        }
    ]
})