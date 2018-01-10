import Vue from 'vue';

import DemoApp from './DemoApp.vue';

Vue.component('demo-app', DemoApp);

new Vue({
  el: '#demoApp',
});