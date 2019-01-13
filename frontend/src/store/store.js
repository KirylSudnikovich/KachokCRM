import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
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
        }
    }
})