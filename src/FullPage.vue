<template>
    <div ref="fullpage">
        <slot></slot>
        <pre>{{options}}</pre>
    </div>
</template>

<script>
  import jquery from 'jquery';
  import 'fullpage.js';

  export default {
    methods: {
      build() {
        var slideSelector = this.options.slideSelector ? this.options.slideSelector : '.slide';
        var sectionSelector = this.options.sectionSelector ? this.options.sectionSelector : '.section';
        let activeSectionIndex = jquery('.fp-section.active').index();
        let activeSlideIndex = jquery('.fp-section.active').find('.fp-slide.active').index();

        this.destroy();

        if (activeSectionIndex > -1) {
          jquery(sectionSelector).eq(activeSectionIndex).addClass('active');
        }

        if (activeSlideIndex > -1) {
          jquery(sectionSelector + '.active').find(slideSelector).eq(activeSlideIndex).addClass('active');
        }

        jquery(this.$refs.fullpage).fullpage(this.options);
      },
      destroy() {
        if (typeof jquery.fn.fullpage.destroy !== 'undefined') {
          jquery.fn.fullpage.destroy('all');
        }

      }
    },
    mounted() {
      this.build();
    },
    beforeDestroy() {
      this.destroy();
    },
    props: {
      options: {
        type: Object,
        required: true
      },
    },
    watch: {
      options: {
        deep: true,
        handler() {
          this.build()
        }
      }
    }
  }
</script>

