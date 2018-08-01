import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
