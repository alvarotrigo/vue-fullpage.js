# Important Notice: vue-fullpage.js will soon support Vue 3. This branch is for development and should not be used in production.

# Vue-fullpage.js

![preview](https://alvarotrigo.com/fullPage/vue-fullpage/imgs/vue-fullpage-wrapper.png)

<p align="center">
Official Vue.js 3 wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v0.1.7-brightgreen.svg)

- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- By [@imac2](https://twitter.com/imac2). Thanks to [VasiliyGryaznoy](https://github.com/VasiliyGryaznoy) , [dragg](https://github.com/dragg) and [Raphael Owino](https://twitter.com/ralphowino)

## Table of contents

1. [Installation](#installation)
2. [License](#license)
3. [Example](#example)
4. [Usage](#usage)
5. [Options](#options)
6. [Methods](#methods)
7. [Callbacks](#callbacks)
8. [Usage with Nuxt.js](#usage-with-nuxtjs)
9. [Usage with Gridsome](#usage-with-gridsome)
10. [Contributing](#contributing)
11. [Resources](#resources)

## Installation

Terminal:

```bash
// With npm
npm install --save vue-fullpage.js
```

## License

### Non open source license

If you want to use vue-fullpage to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application's source code to an open source license. [Purchase a Fullpage Commercial License](https://alvarotrigo.com/fullPage/pricing/).

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Example

```bash
// With npm
cd example/
npm install
npm run start
```

## Usage

### Bundler (Vite)

```js
import { createApp } from 'vue'
import App from './App.vue'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.es'

const app = createApp(App)
app.use(VueFullPage)
app.mount('#app')
```

Notice that when using the option `scrollOverflow:true` or any [fullPage.js extension](https://alvarotrigo.com/fullPage/extensions/) you'll have to include the file for those features before the `vue-fullpage` component.

### Browser

You can check a browser stand alone demo [here](https://github.com/alvarotrigo/vue-fullpage.js/tree/master/demos/stand-alone/).

```html
<!-- On the page head -->
<link
  rel="stylesheet"
  href="https://unpkg.com/vue-fullpage.js/dist/style.css"
/>

<!-- Include after Vue (before closing body) -->
<script type="module" src="https://unpkg.com/vue-fullpage.js/dist/vue-fullpage.es.js"></script>
```

## Required HTML

This wrapper creates a `<full-page>` component , which you can use like other Vue.js components. For example:

```html
<div>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">First section ...</div>
    <div class="section">Second section ...</div>
  </full-page>
</div>
```

## Options

You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Just pass options object into this wrapper like Vue.js property.
Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

Notice that if you want to make use of the option `scrollOverflow:true`, you'll have to include the scrollOverflow file before vue-fullpage.js, as detailed [above](https://github.com/alvarotrigo/vue-fullpage.js#bundler-webpack-rollup).

Example:

```javascript
export default {
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
      },
    }
  }
}
```

### Delayed init

Full-page will init itself automatically on `mount`. This may not work properly when using async components to inside it's sections, as it has no way of knowing when said components are ready and mounted.

Use the `skipInit` prop to stop full-page from initializing itself. You can do it when youself by using a `ref` like:

```html
<full-page ref="fullpage" :options="options" :skip-init="true"></full-page>
```

```js
methods: {
  // Called when your components are ready. That is up to you to decide when.
  componentsReady() {
    this.$refs.fullpage.init()
  }
}
```

## Methods

You can make use of any of the [methods](https://github.com/alvarotrigo/fullPage.js#methods) provided by fullPage.js by accessing the instance object via the a reference `$refs.fullpage.api`.

Example:

```html
<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">
          Next
        </button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">
          Prev
        </button>
        Section 2
      </div>
    </full-page>
  </div>
</template>
```

Similar you can call any method of fullPage.js library directly on Javascript:

```javascript
fullpage_api.setAllowScrolling(false)
```

## Callbacks

As mentioned [above](#options) you can pass callbacks through options object:

```html
<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
    </full-page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          afterLoad: this.afterLoad,
        },
      }
    },

    methods: {
      afterLoad() {
        console.log("Emitted 'after load' event.")
      },
    },
  }
</script>
```

Or you can use the standard approach for event handling of Vue.js:

```html
<template>
  <div>
    <full-page @after-load="afterLoad"> .... </full-page>
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

vue-fullpage.js will watch all changes taking place within the fullpage.js options but will NOT automatically watch any DOM changes. If you want vue-fullpage.js to react to DOM changes call the `build()` method after making those changes. For example:

```javascript
//creating the section div
var section = document.createElement('div')
section.className = 'section'
section.innerHTML = '<h3>New Section</h3>'

//adding section
document.querySelector('#fullpage').appendChild(section)

//where --> var vm = new Vue({...}) if calling it from outside.
vm.$refs.fullpage.build()

//or, when calling it from inside the Vue component methods:
this.$refs.fullpage.build()
```

In order for fullPage.js to get updated after a change in any of the fullPage.js options, you'll have to make sure to use such option in the initialisation.

For example, if we want fullPage.js to get updated whenever I change the `scrollBar` and `controlArrows` options, I'll have to use the following initialisation:

```js
export default {
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        controlArrows: true,
        scrollBar: true,
      },
    }
  },
}
```

## :construction: Usage with Nuxt.js

TBD

## :construction: Usage with Gridsome

TBD

## Contributing

Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Resources

- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)
