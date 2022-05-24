<template>
  <div ref="fullpage">
    <slot></slot>
  </div>
</template>

<script>
import 'fullpage.js/dist/fullpage.min.css'
import fullpage from 'fullpage.js/dist/fullpage.extensions.min.js'
import * as constants from './constants'

export default {
  name: 'FullPage',
  props: {
    options: {
      type: Object,
      default () {}
    },
    skipInit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      events: constants.EVENTS.reduce((eventsHandlers, event) => {
        return {
          ...eventsHandlers,
          [event]: (...args) => {
            this.emitEvent(event, args)
          },
        }
      }, {}),
      api: undefined,
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.build()
      },
    },
  },
  mounted() {
    !this.skipInit && this.init()
  },
  beforeUnmount() {
    if (typeof this.api !== 'undefined') {
      this.destroy()
    }
  },
  methods: {
    build() {
      let slideSelector = this.options.slideSelector || '.slide'
      let sectionSelector = this.options.sectionSelector || '.section'
      const activeSectionIndex = window.fp_utils.index(document.querySelector(sectionSelector + '.active'))
      const activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active')
      const activeSlideIndex = activeSlide ? window.fp_utils.index(activeSlide) : -1

      this.destroy()

      if (activeSectionIndex > -1) {
        window.fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active')
      }

      if (activeSlideIndex > -1) {
        window.fp_utils.addClass(activeSlide, 'active')
      }

      this.init()
    },
    destroy() {
      if (typeof window.fullpage_api !== 'undefined' && typeof window.fullpage_api.destroy !== 'undefined') {
        window.fullpage_api.destroy('all')
      }
    },
    emitEvent(name, args) {
      this.$emit(name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), ...args)

      if (Object.prototype.hasOwnProperty.call(this.options, name)) {
        this.options[name].apply(this, args)
      }
    },
    init() {
      this.api = new fullpage(this.$refs.fullpage, this.options)
    },
  },
}
</script>
