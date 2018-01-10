# Vue-fullpage.js
![preview](https://alvarotrigo.com/fullPage/vue-fullpage/imgs/vue-fullpage-wrapper.png)
<p align="center">
Official Vue.js wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

## Table of contents
1. [Installation](#installation)
2. [Basic usage](#basic-usage)
3. [Options](#options)
4. [Methods of wrapper](#methods-of-wrapper)
5. [Callbacks](#callbacks)
6. [Contributing](#contributing)
7. [License](#license)

## Installation
For using of this component you need to include:
- [fullPage.js library](https://github.com/alvarotrigo/fullPage.js/) with its dependencies
- Install and register this wrapper like simple Vue.js component.

## Basic usage
This wrapper creates a `<full-page>` component , which you can use like other Vue.js components. For example:

```html
<template>
  <div>
    <full-page :options="options">
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
  import FullPage from 'FullPage';

  export default {
    components: {
      FullPage,
    },

    data() {
      return {
        options: {
          paddingTop: '30px'
        },
      }
    },
  }
</script>
```

## Options
You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Just pass options object into this wrapper like Vue.js property. You can see this in the example above.
Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

## Methods of wrapper
fullPage.js contains many [methods](https://github.com/alvarotrigo/fullPage.js#methods).
You can use any of them. Just include fullPage mixin in your component. This mixin contains all methods which fullPage library provides.

Example:
```html
<template>
  <div>
    <full-page>
      <div class="section">
        <button class="next" @click="moveSectionDown">Next</button>
        First section ...
      </div>
      <div class="section">
        <button class="prev" @click="moveSectionUp">Prev</button>
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
  import FullPage from 'FullPage';
  import fullPageMixin from 'fullPageMixin';

  export default {
    mixins: [fullPageMixin],

    components: {
      FullPage,
    },
  }
</script>
```
Similar you can call any method of fullPage.js library.

## Callbacks
As mentioned [above](#options) you can pass callbacks through options object:
```html
<template>
  <div>
    <full-page :options="options">
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
  import FullPage from 'FullPage';

  export default {
      components: {
        FullPage,
      },

      data() {
        return {
          options: {
            afterLoad: this.afterLoad,
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
  import FullPage from 'FullPage';

  export default {
      components: {
        FullPage,
      },

      methods: {
        afterLoad() {
          ...
        },
      },
    }
</script>

```

Similar you can handle any [event](https://github.com/alvarotrigo/fullPage.js#callbacks) of fullPage.js library.
Just translate camelCase name of callback to kebab-case and use it ;)

## Contributing
Please see [Contributing to fullpage.js](https://github.com/alvarotrigo/fullPage.js/wiki/Contributing-to-fullpage.js)


## License

### Commercial license
If you want to use vue-fullpage.js to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Purchase a vue-fullpage.js Commercial License here.

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use vue-fullpage.js under the terms of the GPLv3.

Read more about [vue-fullpage.js license](https://alvarotrigo.com/fullPage/vue-fullpage/license.html).