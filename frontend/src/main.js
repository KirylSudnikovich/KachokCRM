import Vue from 'vue'
import GSignInButton from 'vue-google-signin-button'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(GSignInButton)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
