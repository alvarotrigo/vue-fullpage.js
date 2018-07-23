window.pepe = new Vue({
  el: '#app',
  name: 'app',
  data: function(){
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      }
    }
  },
  methods: {
    afterLoad: function() {
      console.log('After load');
    },
    addSection: function(e) {
      e.preventDefault();
      var newSectionNumber = document.querySelectorAll('.fp-section').length + 1;

      // creating the section div
      var section = document.createElement('div');
      section.className = 'section';
      section.innerHTML = '<h3>Section' + newSectionNumber + '</h3>';

      // adding section
      document.querySelector('#fullpage').appendChild(section);

      // creating the section menu element
      var sectionMenuItem = document.createElement('li');
      sectionMenuItem.setAttribute('data-menuanchor', 'page' + newSectionNumber);
      sectionMenuItem.innerHTML = '<a href="#page${newSectionNumber}">Section ' + newSectionNumber + '</a>';

      // adding it to the sections menu
      var sectionsMenuItems = document.querySelector('#menu')
      sectionsMenuItems.appendChild(sectionMenuItem)

      // adding anchor for the section
      this.options.anchors.push('page' + newSectionNumber)

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build()
    },
    removeSection: function() {
      var sections = document.querySelector('#fullpage').querySelectorAll('.fp-section')
      var lastSection = sections[sections.length - 1]

      // removing the last section
      lastSection.parentNode.removeChild(lastSection)

      // removing the last anchor
      this.options.anchors.pop()

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll('#menu li')
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1]
      lastItem.parentNode.removeChild(lastItem)
    },
    toggleNavigation: function() {
      this.options.navigation = !this.options.navigation
    },
    toggleScrollbar: function() {
      this.options.scrollBar = !this.options.scrollBar
    }
  }
})
