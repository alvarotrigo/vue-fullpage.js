# Vue-fullpage.js
![preview](https://alvarotrigo.com/fullPage/vue-fullpage/imgs/vue-fullpage-wrapper.png)
<p align="center">
Official Vue.js wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

- [Demo online](https://alvarotrigo.com/vue-fullpage/) | [Codepen](https://codepen.io/alvarotrigo/pen/zpQmwq)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- By [@imac2](https://twitter.com/imac2). Thanks to [VasiliyGryaznoy](https://github.com/VasiliyGryaznoy) , [dragg](https://github.com/dragg) and [Raphael Owino](https://twitter.com/ralphowino)

## Table of contents
1. [Installation](#installation)
2. [License](#license)
3. [Usage](#usage)
3. [Options](#options)
4. [Methods](#methods)
5. [Callbacks](#callbacks)
6. [Contributing](#contributing)
7. [Resources](#resources)


## Installation

Terminal:
```bash
// With bower
bower install vue-fullpage.js

// With npm
npm install --save vue-fullpage.js
```

## License

### Commercial license
Although vue-fullpage.js is under the MIT license as can be seen on the [LICENSE file](https://github.com/alvarotrigo/vue-fullpage.js/blob/master/LICENSE), notice [fullPage.js library](https://github.com/alvarotrigo/fullPage.js) is under GPLv3. Therefore you'll need to purchase a Commercial License for fullPage.js if you want to use fullPage to develop non open sourced sites, themes, projects, and applications. [[Purchase a Fullpage Commercial License]](https://alvarotrigo.com/fullPage/pricing/)

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Usage

### Bundler (Webpack, Rollup)

You can check a bundle demo [here](https://github.com/alvarotrigo/vue-fullpage.js/tree/master/demos/webpack/).

```js
import Vue from 'vue'
import VueFullPage from 'vue-fullpage'

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### Browser

You can check a browser stand alone demo [here](https://github.com/alvarotrigo/vue-fullpage.js/tree/master/demos/stand-alone/).

```html
<!-- Include after Vue -->
<link rel="stylesheet" href="https://unpkg.com/fullpage.js/dist/fullpage.min.css"></link>
<script src="https://unpkg.com/vue-fullpage.js/dist/vue-fullpage.min.js"></script>
```

## Required HTML
This wrapper creates a `<full-page>` component , which you can use like other Vue.js components. For example:

```html
<div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      First section ...
    </div>
    <div class="section">
      Second section ...
    </div>
  </full-page>
</div>
```

## Options
You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Just pass options object into this wrapper like Vue.js property.
Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

Example:

```javacript
new Vue({
  el: '#app',
  name: 'app',
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
    }
  },
```

## Methods
You can make use of any of the [methods](https://github.com/alvarotrigo/fullPage.js#methods) provided by fullPage.js. by accessing the instance object via the a reference

``` this.$refs.fullpage.instance ```

Example:
```html
<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.instance.moveSectionDown">Next</button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.instance.moveSectionUp">Prev</button>
        Section 2
      </div>
    </full-page>
  </div>
</template>
```

Similar you can call any method of fullPage.js library directly on Javascript:

```
fullpage_api.setAllowScrolling(false);
```

## Callbacks
As mentioned [above](#options) you can pass callbacks through options object:
```html
<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          options: {
            afterLoad: this.afterLoad,
          }
        }
      },

      methods: {
        afterLoad() {
          console.log("Emitted 'after load' event.");
        }
      }
    }
</script>
```

Or you can use the standard approach for event handling of Vue.js:
```html
<template>
  <div>
    <full-page @after-load="afterLoad">
        ....
    </full-page>
  </div>
</template>
<script>
  export default {
      methods: {
        afterLoad() {
          ...
        }
      }
    }
</script>

```

Similar you can handle any [event](https://github.com/alvarotrigo/fullPage.js#callbacks) of fullPage.js library.
Just translate camelCase name of callback to kebab-case and use it ;)

## Dynamic changes
vue-fullpage.js will watch all changes taking place within the fullpage.js options but will NOT automatically watch any DOM changes. If you want vue-fullpage.js to react to DOM changes call the `update()` method after making those changes. For example:

```javascript
//creating the section div
var section = document.createElement('div');
section.className = 'section';
section.innerHTML = '<h3>New Section</h3>';

//adding section
document.querySelector('#fullpage').appendChild(section);

//where --> var vm = new Vue({...}) if calling it from outside.
vm.$refs.fullpage.build();

//or, when calling it from inside the Vue component methods:
this.$refs.fullpage.build();
```

In order for fullPage.js to get updated after a change in any of the fullPage.js options, you'll have to make sure to use such option in the initialisation.

For example, if we want fullPage.js to get updated whenever I change the `scrollBar` and `controlArrows` options, I'll have to use the following initialisation:

```html
<script>
  export default {
    data() {
      return {
        options: {
          controlArrows: true,
          scrollBar: true
        },
      }
    },
  }
</script>
```

Or, if using `new Vue`, use an object instead of a function for the `data` property:
```javascript
new Vue({
    el: '#app',
    data: {
        options: {
            controlArrows: true,
            scrollBar: true
        },
    }
});
```

## Contributing
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Resources
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)