<template>
  <div>
    <ul id="menu">
      <li data-menuanchor="firstPage" class="active">
        <a href="#firstPage">Move to 1st slide</a>
      </li>
      <li data-menuanchor="secondPage" class="active">
        <a href="#secondPage">Move to 2th slide</a>
      </li>
      <li data-menuanchor="thirdPage">
        <a href="#thirdPage">Move to 3th slide</a>
      </li>
      <li data-menuanchor="fourthPage">
        <a href="#fourthPage">Move to 4th slide</a>
      </li>
    </ul>

    <full-page :options="options" @after-load="afterLoad">
      <div class="section" data-anchor="firstPage">
        <button class="next" @click="moveSectionDown">Next</button>
        1. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </div>
      <div class="section" data-anchor="secondPage">
        <button class="prev" @click="moveSectionUp">Prev</button>
        <button class="next" @click="moveSectionDown">Next</button>
        2. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </div>
      <div class="section" data-anchor="thirdPage">
        <button class="prev" @click="moveSectionUp">Prev</button>
        <button class="next" @click="moveSectionDown">Next</button>
        3. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </div>
      <div class="section" data-anchor="fourthPage">
        <button class="prev" @click="moveSectionUp">Prev</button>
        4. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
        in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated
        Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
      </div>
    </full-page>
  </div>
</template>

<script>
  import FullPage from './../../../src/FullPage.vue';
  import fullPageMixin from './../../../src/fullPageMixin';

  export default {
    mixins: [fullPageMixin],

    components: {
      FullPage,
    },

    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
          menu: '#menu',
          navigation: true,
          anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        },
      }
    },

    methods: {
      afterLoad() {
        console.log("Emitted 'after load' event.");
      },
    },
  }
</script>

<style>
  #menu li {
    display: inline-block;
    margin: 10px;
  }

  #menu {
    position: fixed;
    z-index: 1030;
  }
</style>
