# Vue-fullpage.js
![preview](https://alvarotrigo.com/fullPage/vue-fullpage/imgs/vue-fullpage-wrapper.png)
<p align="center">
Official Vue.js wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

![fullPage.js version](http://img.shields.io/badge/fullPage.js-v0.1.6-brightgreen.svg)

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
6. [Usage with Nuxt.js](#usage-with-nuxtjs)
7. [Usage with Gridsome](#usage-with-gridsome)
8. [Contributing](#contributing)
9. [Resources](#resources)


## Installation

Terminal:
```bash
// With bower
bower install vue-fullpage.js

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

## Usage

### Bundler (Webpack, Rollup)

You can check a bundle demo [here](https://github.com/alvarotrigo/vue-fullpage.js/tree/master/demos/webpack/).

```js
import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

Notice that when using the option `scrollOverflow:true` or any [fullPage.js extension](https://alvarotrigo.com/fullPage/extensions/) you'll have to include the file for those features before the `vue-fullpage` component.

Also, you'll have to add the fullPage CSS file (`fullpage.min.css`). Is up to you how you add it. You can add it on the HTML page or bundle it with other CSS files, or import it with Javascript.

### Browser

You can check a browser stand alone demo [here](https://github.com/alvarotrigo/vue-fullpage.js/tree/master/demos/stand-alone/).

```html
<!-- On the page head -->
<link rel="stylesheet" href="https://unpkg.com/fullpage.js/dist/fullpage.min.css">

<!-- Include after Vue (before closing body) -->
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

Notice that if you want to make use of the option `scrollOverflow:true`, you'll have to include the scrollOverflow file before vue-fullpage.js, as detailed [above](https://github.com/alvarotrigo/vue-fullpage.js#bundler-webpack-rollup).

Example:

```javascript
new Vue({
  el: '#app',
  name: 'app',
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
    }
  }
});
```

### Delayed init

Full-page will init itself automatically on `mount`. This may not work properly when using async components to inside it's sections, as it has no way of knowing when said components are ready and mounted.

Use the `skipInit` prop to stop full-page from initializing itself. You can do it when youself by using a `ref` like:

```html
<full-page ref="fullpage" :options="options" :skip-init="true">
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
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 2
      </div>
    </full-page>
  </div>
</template>
```

Similar you can call any method of fullPage.js library directly on Javascript:

```javascript
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
vue-fullpage.js will watch all changes taking place within the fullpage.js options but will NOT automatically watch any DOM changes. If you want vue-fullpage.js to react to DOM changes call the `build()` method after making those changes. For example:

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
          licenseKey: 'YOUR_KEY_HERE',
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
          licenseKey: 'YOUR_KEY_HERE',
          controlArrows: true,
          scrollBar: true
        },
    }
});
```

## Usage with Nuxt.js
Before using using Fullpage.js with Nuxt, keep in mind there will always be some drawbacks. Nuxt is a server side rendered framework, thus the browser is not available at render time, something Fullpage relies on for its magic to happen. There are however, ways to go partially around this. There are two setup options: use [nuxt-fullpage.js](https://www.npmjs.com/package/nuxt-fullpage.js) plugin or make such a plugin if needed by your specific requirements.

### Using a nuxt-fullpage.js plugin
- Add `nuxt-fullpage.js` dependency using yarn or npm to your project
```bash
// With npm
npm install --save nuxt-fullpage.js
```
- Add `nuxt-fullpage.js` to `modules` section of `nuxt.config.js`
```js
{
  modules: [
    'nuxt-fullpage.js',
 ]
}
```
That's all, you're ready to go. Also you can find additional info about plugin in [docs](https://www.npmjs.com/package/nuxt-fullpage.js)

### Defining your own Nuxt plugin
Create a file called `fullpage.js` inside your Nuxt `plugins` folder. Should look something like this:

```
import Vue from 'vue'
import Fullpage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'

Vue.use(Fullpage)
```

Now inside your `nuxt.config.js`, define your fullpage plugin file inside the `plugins` key like so:
```
  plugins: [
    { src: '~/plugins/fullpage', mode: 'client' }
  ],
```
Note the `mode: 'client'` option. Not adding this option will cause errors during render time. This option means Nuxt will not render fullpage on the server, rather skip it and run it in the Browser. 

Opening the browser you will see Fullpage is working.

You will however get a warning in the console saying:
```
[Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```
This is normal, nuxt did not render Fullpage at server render time, but then on mount in the Browser, Fullpage kicks in, changing the DOM. The good part is the content inside the fullpage component (each section) will be present at server render time, which means search engine crawlers will be able to detect it.

### Using <no-ssr> component
If you do not want to see that warning and you do not care about search engnes, you can wrap your fullpage component inside a `<no-ssr>` tag like so:

```
<template>
  <no-ssr>
    <full-page :options="options">
      <div> This content will only be visibe on browser render, not server render </div>
    </full-page>
  </no-ssr>
</template>
```

## Usage with Gridsome
Gridsome first renders websites statically with Node.js, which means that the browser environment isn't available at render time. Fullpage requires a browser environment to work, which causes `nuxt build` to fail. You can work around this by only loading Fullpage in the browser, and ignoring it during pre-rendering.
In your `main.js` file, the exported function exposes an `isClient` variable. You can use it to load Fullpage only when you're in a client environment.
```js
export default function(Vue, { isClient }) {
  if (isClient) {
    const { default: VueFullPage } = require('vue-fullpage.js')
    Vue.use(VueFullPage)
  }
})
```
Then, in your layouts, templates, or pages that use Fullpage, make sure to wrap the code that uses the plugin with the `ClientOnly` component.
```html
<template>
  <Layout>
    <ClientOnly>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">First section ...</div>
        <div class="section">Second section ...</div>
      </full-page>
    </ClientOnly>
  </Layout>
</template>
```

## Contributing
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)

# Resources
- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)
