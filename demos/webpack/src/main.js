import Vue from 'vue'

// Optional. When using scrollOverflow:true
import 'fullpage.js/vendors/scrolloverflow'

// Optional. When using fullpage extensions
//import './fullpage.scrollHorizontally.min'

import VueFullPage from 'vue-fullpage.js'
import App from './App.vue'

Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
