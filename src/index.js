let FullPage

if (!process.browser) {
  FullPage = require('./FullPagePlaceholder.vue')
} else {
  FullPage = require('./FullPage.vue')
  // Install by default if using the script tag
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}

function plugin (Vue) {
  Vue.component('full-page', FullPage)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export {
  FullPage,
  version
}
