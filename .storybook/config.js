import { configure } from '@storybook/vue';

import Vue from 'vue';
import jquery from 'jquery';

// Import your custom components.
import FullPage from '../src/FullPage';

// Register custom components.
Vue.component('full-page', FullPage);

global.$ = global.jQuery = jquery;

function loadStories() {
  // You can require as many stories as you need.
  require('./stories');
}

configure(loadStories, module);