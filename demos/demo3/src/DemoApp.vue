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

    <full-page :options="options">
      <div class="section" data-anchor="firstPage">

        <h1>fullPage.js</h1>
        <h2>Create Beautiful Fullscreen Scrolling Websites</h2>
        <br>
        <div class="button" id="download"><a href="https://github.com/alvarotrigo/fullpage.js/archive/master.zip">Download</a>
        </div>
        <br>
        <img src="imgs/fullPage.png" alt="fullPage" height="243" width="282" id="logo">
        <p id="donations">
          <a href="https://alvarotrigo.com/fullPage/extensions/" target="_blank">fullpage.js Extensions</a>
        </p>
      </div>
      <div class="section" data-anchor="secondPage">
        <div class="slide">
          <div class="intro">
            <h1>Create Sliders</h1>
            <p>
              Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.</p>
            <img alt="slider" height="132" width="662" id="slidersImg" src="imgs/slider.png">
          </div>
        </div>
        <div class="slide">
          <div class="intro">
            <img alt="simple" height="176" width="176" src="imgs/1.png">
            <h1>Simple</h1>
            <p>Easy to use. Configurable and customizable.</p>
          </div>
        </div>
        <div class="slide">
          <div class="intro">
            <img alt="Cool" height="176" width="176" src="imgs/2.png">
            <h1>Cool</h1>
            <p>It just looks cool. Impress everybody with a simple and modern web design!</p>
          </div>
        </div>
        <div class="slide">
          <div class="intro">
            <img alt="Compatible" height="176" width="176" src="imgs/3.png">
            <h1>Compatible</h1>
            <p>
              Working in modern and old browsers too! It's not IE 8 users' fault having to use that horrible browser! Lets give them a chance to see your site in a proper way!</p>
          </div>
        </div>
      </div>
      <div class="section" data-anchor="thirdPage">
        <div class="intro">
          <h1>Easy to use plugin</h1>
          <p>HTML markup example to define 4 sections.</p>
          <img alt="example" height="154" width="494" id="easyToUse" src="imgs/example2.png">
        </div>
      </div>
      <div class="section" data-anchor="fourthPage">
        <div class="intro">
          <h1>Working On Tablets</h1>
          <p>
            Designed to fit different screen sizes as well as tablet and mobile devices.
            <br><br><br><br><br>
          </p>
        </div>
      </div>
    </full-page>
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
          menu: '#menu',
          anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
          sectionsColor: ['#1bbc9b', '#4bbfc3', '#7baabe', 'whitesmoke'],
        },
      }
    },
  }
</script>

<style>
  #menu {
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 70;
    position: fixed;
    list-style: none;
    display: block;
  }

  #menu li {
    color: #000;
    background: #fff;
    display: inline-block;
    margin: 10px;
    padding: 0;
  }

  #menu li a, #menu li.active a {
    padding: 9px 18px;
    display: block;
    color: #000;
    text-decoration: none;
  }

  .section {
    text-align: center;
  }

  .button {
    margin: 20px 15px 0 0;
    vertical-align: middle;
    display: inline-block;
  }

  #download {
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .25);
    background-color: white;
  }

  #download a {
    text-decoration: none;
  }

  .button a {
    color: #fff;
    background: #316f68;
    padding: 15px 30px;
    display: block;
  }

  h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: 400;
    color: #444;
  }

  @media screen and (max-height: 580px) {
    h1 {
      font-size: 4.5em;
    }
  }

  body {
    font-family: arial, helvetica;
  }

  #menu li.active a {
    background: #666;
    background: rgba(0, 0, 0, .5);
    color: #fff;
  }

  #menu li:hover {
    background: rgba(255, 255, 255, .8);
  }
</style>
