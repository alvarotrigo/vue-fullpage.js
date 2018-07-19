<template>
    <div ref="fullpage">
        <slot></slot>
    </div>
</template>

<script>
import jquery from 'jquery'
import fullpage from 'fullpage.js'

export default {
  methods: {
    build () {
      var slideSelector = this.options.slideSelector ? this.options.slideSelector : '.slide'
      var sectionSelector = this.options.sectionSelector ? this.options.sectionSelector : '.section'
      const activeSectionIndex = jquery('.fp-section.active').index()
      const activeSlideIndex = jquery('.fp-section.active').find('.fp-slide.active').index()

      this.destroy()

      if (activeSectionIndex > -1) {
        jquery(sectionSelector).eq(activeSectionIndex).addClass('active')
      }

      if (activeSlideIndex > -1) {
        jquery(sectionSelector + '.active').find(slideSelector).eq(activeSlideIndex).addClass('active')
      }
      this.instance = new fullpage(this.$refs.fullpage, this.options)
    },
    destroy () {
      if (typeof window.fullpage_api !== 'undefined' && typeof window.fullpage_api.destroy !== 'undefined') {
        window.fullpage_api.destroy('all')
      }
    }
  },
  mounted () {
    this.build()
  },
  beforeDestroy () {
    this.destroy()
  },
  data(){
    return {
      instance: undefined
    };
  },
  props: {
    options: {
      type: Object,
      required: true
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

