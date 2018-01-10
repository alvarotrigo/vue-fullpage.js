import * as constants from './constants';

export default {
  data() {
    return {
      $_fullPageMixin_refName: 'fullPage',
    };
  },

  methods: {
    // Methods of Full Page
    ...constants.METHODS.reduce((methods, method) => {
      return {
        ...methods,

        [method]: (...args) => {
          $.fn.fullpage[method](args);
        }
      };
    }, {}),
  }
};