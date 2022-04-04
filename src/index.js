import FullPage from './FullPage'
import fullpage from 'fullpage.js/dist/fullpage.extensions.min';

// function plugin (app) {
//   app.component('full-page', FullPage)
// }

// Install by default if using the script tag
// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(plugin)
// }
if (!window.fullpage_api) {
  window.fullpage = fullpage
}

export default FullPage
const version = '__VERSION__'
// Export all components too
export {
  FullPage,
  version
}
