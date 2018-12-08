import Vue from 'vue'
import Router from 'vue-router'
import UserPanel from '@/components/UserPanel'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'UserPanel',
            component: UserPanel
        },
        {
            path: '/reg',
            name: "Home",
            component: Home
        }
    ]
})