# Vue-fullpage.js
![preview](https://alvarotrigo.com/fullPage/vue-fullpage/imgs/vue-fullpage-wrapper.png)
<p align="center">
Official Vue.js wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

- [Demo online](https://alvarotrigo.com/vue-fullpage/)
- [fullpage.js Extensions](http://alvarotrigo.com/fullPage/extensions/)
- By [@imac2](https://twitter.com/imac2).

## Table of contents
1. [Installation](#installation)
2. [Basic usage](#basic-usage)
3. [Options](#options)
4. [Methods](#methods)
5. [Callbacks](#callbacks)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

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

If you prefer to use `Vue.component` followed by `new Vue`, then you would have to include `vue.min.js`, `build.min.js` and optionally `mixin.min.js` if you will make use of fullpage.js methods. [Demo online]().

For example:

```html
<script src="mixin.min.js"></script>
<script src="vue.min.js"></script>
<script src="build.min.js"></script>
```

Then initialise it this way:
```javascript
Vue.component('full-page', fullPage.default);

new Vue({
    el: '#app',
    mixins: [fullPageMixin.default],
    data: {
        options: {
            scrollBar: false
        },
    },
    methods: {
        test: function(e) {
            alert("Test");
        }
    }
});
```

## Options
You can use any [options](https://github.com/alvarotrigo/fullPage.js#options) supported by fullPage.js library.
Just pass options object into this wrapper like Vue.js property. You can see this in the example above.
Options object can contain simple [options](https://github.com/alvarotrigo/fullPage.js#options) as well as fullPage.js [callbacks](https://github.com/alvarotrigo/fullPage.js#callbacks).

## Methods
fullPage.js contains many [methods](https://github.com/alvarotrigo/fullPage.js#methods).
You can use any of them. Just include fullPage mixin in your component and the `fullPageMixin.vue file. This mixin contains all methods which fullPage library provides.

Example:
```html
<template>
  <div>
    <full-page>
      <div class="section">
        <button class="next" @click="moveSectionDown">Next</button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="moveSectionUp">Prev</button>
        Section 2
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

## Dynamic changes
vue-fullpage.js will watch all changes taking place within the fullpage.js options but will NOT watch any DOM changes.

In order for fullPage.js to get updated after a change in any of the fullPage.js options, you'll have to make sure to use such option in the initialization.

For example, if we want fullPage.js to get updated whenever I change the `scrollBar` and `controlArrows` options, I'll have to use this:

```javascript
<script>
  import FullPage from 'FullPage';

  export default {
      components: {
        FullPage,
      },

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
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)

## License

### Commercial license
**You set the price!** You choose what you consider fair. If you want to use vue-fullpage.js to develop commercial sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. [Get vue-fullpage.js Commercial License here]()

### Open source license
If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use vue-fullpage.js under the terms of the GPLv3.

Read more about [vue-fullpage.js license](https://alvarotrigo.com/fullPage/vue-fullpage/license.html).