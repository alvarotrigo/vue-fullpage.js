<template>
    <div ref="fullpage">
        <slot></slot>
    </div>
</template>

<script>
  import fullpage from 'fullpage.js/dist/fullpage.extensions.min'
import * as constants from './constants'

function camelToKebab (string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

  export default {
    methods: {
      build () {
        var slideSelector = this.options.slideSelector || '.slide'
        var sectionSelector = this.options.sectionSelector || '.section'
        const activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'))
        const activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active')
        const activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1

        this.destroy()

        if (activeSectionIndex > -1) {
          fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active')
        }

        if (activeSlideIndex > -1) {
          fp_utils.addClass(activeSlide, 'active')
        }

        this.init()
      },
      destroy () {
        if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
          fullpage_api.destroy('all')
        }
      },
      emitEvent (name, args) {
        // Emit event on Vue way
        this.$emit(camelToKebab(name), ...args)

      // Run event's handler with non Vue way
        if (this.options.hasOwnProperty(name)) {
          this.options[name].apply(this, args)
        }
      },
      init () {
        // eslint-disable-next-line
        this.api = new fullpage(this.$refs.fullpage, this.options)
      }
    },
    mounted () {
      !this.delayInit && this.init()
    },

    beforeDestroy () {
      if (typeof this.api !== 'undefined') {
        this.destroy()
      }
    },
    data () {
      return {
        events: constants.EVENTS.reduce((eventsHandlers, event) => {
          return {
            ...eventsHandlers,

            [event]: (...args) => {
              this.emitEvent(event, args)
            }
          }
        }, {}),
        api: undefined
      }
    },
    props: {
      options: {
        type: Object,
        required: true
      },
      delayInit: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      options: {
        deep: true,
        handler () {
          this.build()
        }
      }
    }
  }
</script>

