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

/**
 * vue-fullpage.js
 * https://github.com/alvarotrigo/vue-fullpage.js
 * @license https://github.com/alvarotrigo/vue-fullpage.js#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
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
          this.update();
        },
      },
    },

    mounted() {
      this.update();
    },

    methods: {
      destroy() {
        if(typeof $.fn.fullpage.destroy !== 'undefined'){
            $.fn.fullpage.destroy('all');
        }
      },

      emitEvent(name, args) {
        // Emit event on Vue way
        this.$emit.apply(this, [camelToKebab(name), ...args]);

        // Run event's handler with non Vue way
        if (this.options.hasOwnProperty(name)) {
          this.options[name].apply(this, args);
        }
      },

      update() {
        var slideSelector = this.options.slideSelector ? this.options.slideSelector : '.slide';
        var sectionSelector = this.options.sectionSelector ? this.options.sectionSelector : '.section';
        let activeSectionIndex = $('.fp-section.active').index();
        let activeSlideIndex = $('.fp-section.active').find('.fp-slide.active').index();

        this.destroy('all');

        if(activeSectionIndex > -1){
          $(sectionSelector).eq(activeSectionIndex).addClass('active');
        }

        if(activeSlideIndex > -1){
          $(sectionSelector + '.active').find(slideSelector).eq(activeSlideIndex).addClass('active');
        }
        $(this.$el).fullpage({
          ...this.options,
          ...this.events,
        });
      },
    },
  };
</script>