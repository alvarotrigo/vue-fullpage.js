<template>
  <div>
    <div class="main-content">
      <full-page :options="options">
        <div class="section">
          <div class="intro">2016</div>
        </div>
        <div class="section">2015
          <div class="slide"> Start </div>
          <div class="slide"> Second Slide</div>
          <div class="slide"> another Slide </div>
          <div class="slide"> oh yeah </div>
        </div>
        <div class="section">2014</div>
        <div class="section">2013</div>
        <div class="section">2012</div>
      </full-page>
    </div>
  </div>
</template>

<script>
  import FullPage from './../../../src/FullPage.vue';

  export default {
    components: {
      FullPage,
    },

    data() {
      return {
        options: {
          sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#A83D25'],
          navigation: true,
          navigationPosition: 'right',
          slidesNavigation: true,
          showActiveTooltip: true,
          paddingTop: '0px',
          paddingBottom: '0px',
          navigationTooltips: ['2016', '2015', '2014', '2013', '2012']
        }
      }
    },
  }
</script>

<style>
  .small-logo-sidenav {
    width: 80px !important;
    height: 80px !important;
  }

  md-toolbar.md-default-theme:not(.md-menu-toolbar), md-toolbar:not(.md-menu-toolbar) {
    background-color: rgba(49, 128, 49, 0.72) !important;
  }

  a {
    color: orange;
  }

  .sideNav-left {
    height: 100%;
    background: rgba(0, 0, 0, 0.75) none repeat scroll 0% 0%;
    z-index: 20000;
  }

  .openSideNav-button {
    width: 30px;
    height: 30px;
    margin-left: -30px;
  }

  .navbar-header {
    min-height: 80px !important;
    width: 100%;
    background-color: rgba(68, 64, 64, 0.77);
    z-index: 10000;
  }

  .fp-slidesNav.bottom {
    bottom: 15% !important;
  }

  .fp-controlArrow.fp-prev {
    left: 5px !important;
    border-width: 20.5px 20px 20.5px 0px !important;
    border-color: transparent #FFF transparent transparent;
  }

  .fp-controlArrow.fp-next {
    right: 45px !important;
    border-width: 20.5px 0px 20.5px 20px !important;
    border-color: transparent transparent transparent #FFF;
  }

  .main-content {
    height: 100%;
    width: 100%;
  }

  .color-gray {
    background-color: rgba(65, 59, 59, 0.3) !important;
  }

  .spacing-sidenav {
    padding-right: 20px;
    color: orange;
    fill: orange;
  }

  .spacing-sidenav path {
    fill: orange;
  }

  .fp-tooltip {
    color: orange !important;
  }
</style>
