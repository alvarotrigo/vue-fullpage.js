import fullpage from 'fullpage.js/dist/fullpage.extensions.min'
import * as constants from './constants'
import { defineComponent, watch, ref, reactive, onMounted, onBeforeUnmount, h } from 'vue';

function camelToKebab (string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export default defineComponent({
  props: {
    options: {
      type: Object,
      required: true
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  emit: constants.EVENTS.map(event => camelToKebab(event)),
  setup(props, { emit, slots }) {
    const fullPageRef = ref(null);
    const events = reactive(
      ...constants.EVENTS.reduce((eventsHandlers, event) => {
        return {
          ...eventsHandlers,

          [event]: (...args) => {
            emitEvent(event, args)
          }
        }
      }, {})
    );
    const api = ref(undefined);

    function emitEvent (name, args) {
      // Emit event on Vue way
      emit(camelToKebab(name), ...args)

    // Run event's handler with non Vue way
      if (props.options.hasOwnProperty(name)) {
        props.options[name].apply(this, args)
      }
    }

    function init () {
      // eslint-disable-next-line
      api = new fullpage(fullPageRef, props.options)
    }

    function build () {
      var slideSelector = props.options.slideSelector || '.slide'
      var sectionSelector = props.options.sectionSelector || '.section'
      const activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'))
      const activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active')
      const activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1

      destroy()

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active')
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active')
      }

      init()
    }

    function destroy () {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all')
      }
    }

    watch(
      () => props.options,
      () => build(),
      {
        deep: true
      }
    );

    onMounted(() => {
      !props.skipInit && init();
    });

    onBeforeUnmount(() => {
      if (typeof api !== 'undefined') {
        destroy()
      }
    });

    return () => h(
      'div',
      {
        ref: fullPageRef
      },
      () => h(slots.default())
    )
  }
});
