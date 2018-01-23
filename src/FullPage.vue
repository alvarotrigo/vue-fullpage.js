<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import * as constants from './constants';
  import {
    camelToKebab,
  } from './helpers';

  export default {
    props: {
      options: {
        type: Object,
        default: () => {
          return {};
        },
      },
    },

    data() {
      return {
        events: constants.EVENTS.reduce((eventsHandlers, event) => {
          return {
            ...eventsHandlers,

            [event]: (...args) => {
              this.emitEvent(event, args);
            }
          };
        }, {}),
      }
    },

    watch: {
      options: {
        deep: true,
        handler() {
          let activeSectionIndex = $('.fp-section.active').index();
          let activeSlideIndex = $('.fp-section.active').find('.slide.active').index();

          this.destroy('all');

          $('.section').eq(activeSectionIndex).addClass('active');

          if(activeSlideIndex > -1){
            $('.section.active').find('.slide').eq(activeSlideIndex).addClass('active');
          }

          this.init();
        },
      },
    },

    mounted() {
      this.init();
    },

    methods: {
      init() {
        $(this.$el).fullpage({
          ...this.options,
          ...this.events,
        });
      },

      destroy() {
        $.fn.fullpage.destroy('all');
      },

      emitEvent(name, args) {
        // Emit event on Vue way
        this.$emit.apply(this, [camelToKebab(name), ...args]);

        // Run event's handler with non Vue way
        if (this.options.hasOwnProperty(name)) {
          this.options[name].apply(this, args);
        }
      },
    },
  };
</script>