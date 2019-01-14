import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
        username: '',
        email: ''
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status
    },
    mutations: {
        logout(state) {
            // изменяем состояние
            state.token = '';
            localStorage.removeItem('user-token')
        },
        login(state, token) {
            state.token = token
            localStorage.setItem('user-token', token)
            
        },
        getInfo(state) {
            axios.get("http://localhost:8000/api/v1/rest-auth/user/", { withCredentials: true }).then(resp => {
              state.username = resp.data.username
              state.email = resp.data.email
              return resp;
            });
        }
    }
})