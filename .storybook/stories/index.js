import {storiesOf} from '@storybook/vue';

import fullpage from '../../src/FullPage';

const stories = storiesOf('FullPage', module);

stories.add('Local component', () => ({
  components: {fullpage},
  data(){
    return {
      options: {
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      }
    }
  },
  template:
  '<fullpage :options="options">\n' +
  '   <div class="section">\n' +
  '       <h3>Section 1</h3>\n' +
  '   </div>\n' +
  '   <div class="section">\n' +
  '       <div class="slide">\n' +
  '           <h3>Slide 2.1</h3>\n' +
  '       </div>\n' +
  '       <div class="slide">\n' +
  '           <h3>Slide 2.2</h3>\n' +
  '       </div>\n' +
  '       <div class="slide">\n' +
  '           <h3>Slide 2.3</h3>\n' +
  '       </div>\n' +
  '   </div>\n' +
  '   <div class="section">\n' +
  '       <h3>Section 3</h3>\n' +
  '   </div>\n' +
  '</fullpage>'
}));

stories.add('Global component', () => ({
  data(){
    return {
      options: {
        height: '200px'
      }
    }
  },
  template:
  '<full-page :options="options">' +
    '<div class="section">Some section</div>' +
    '<div class="section">Some section</div>' +
    '<div class="section">Some section</div>' +
    '<div class="section">Some section</div>' +
  '</full-page>'
}));
