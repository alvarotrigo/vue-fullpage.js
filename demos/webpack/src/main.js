import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' //optional line
import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
