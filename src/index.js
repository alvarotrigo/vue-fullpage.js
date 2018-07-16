import 'fullpage.js';
import  jQuery from 'jquery';
import FullPage from './FullPage.vue'

function plugin (Vue) {
  Vue.component('full-page', FullPage)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
  if(!window.$)
  {
    window.$ = jQuery
  }
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  FullPage,
  version
}
