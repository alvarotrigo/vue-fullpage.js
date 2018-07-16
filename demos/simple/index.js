new Vue({
  el: '#app',
  name: 'app',
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      },
    }
  },
  methods: {

    afterLoad() {
      console.log('After load');
    },
    addSection() {
      var newSectionNumber = $('.fp-section').length + 1;

      $('#fullpage').append(`<div class="section">
                <h3>Section ${newSectionNumber}</h3>
            </div>`);

      $('#menu').find('li').last().before(`<li data-menuanchor="page${newSectionNumber}">
                <a href="#page${newSectionNumber}">Section${newSectionNumber}</a>
            </li>`);

      this.options.anchors.push(`page${newSectionNumber}`);

      if (this.options.sectionsColor.length < newSectionNumber) {
        this.options.sectionsColor.push(this.options.sectionsColor[newSectionNumber - this.options.sectionsColor.length - 1]);
      }
    },
    removeSection() {
      $('#fullpage').find('.fp-section').last().remove();
      this.options.anchors.pop();
      $('#menu').find('li').last().prev().remove();
    },
    toggleNavigation() {
      this.options.navigation = !this.options.navigation;
    },
    toggleScrollbar() {
      console.log("Changing scrollbar...");
      this.options.scrollBar = !this.options.scrollBar;
    }
  },
})