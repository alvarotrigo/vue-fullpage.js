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
          if (args[0] instanceof Event) {
            args.shift();
          }

          if (args.length) {
            $.fn.fullpage[method].apply( this, args );
          } else {
            $.fn.fullpage[method]();
          }
        }
      };
    }, {}),
  }
};