# vuejs-sticky-directive
Support top and bottom sticky base on pure js and vue.

[📑中文文档](https://github.com/TriDiamond/vuejs-sticky-directive/blob/master/README_CN.md)

# Install

```Bash
npm install vue-sticky-directive --save
```

ES2015
```JavaScript
// register globally
import Sticky from 'vuejs-sticky-directive'
Vue.use(Sticky)

// or for a single instance
import Sticky from 'vuejs-sticky-directive'
new Vue({
  directives: {Sticky}
})
```

# Usage
+ Use `v-sticky` directive to enable element postion sticky
+ Use `sticky-*` attributes to define its options
+ Sticky element will find its nearest element with `sticky-container` attribute or its parent node if faild as the releative element.

[basic example](https://mehwww.github.io/vue-sticky-directive/examples/basic/)

```HTML
<div sticky-container>
  <div v-sticky sticky-offset="offset" sticky-side="top">
    ...
  </div>
</div>
```

# Options
* `sticky-offset`
  * `top`_(number)_ - set the top breakpoint (default: `0`)
  * `bottom`_(number)_ - set the bottom breakpoint (default: `0`)
* `sticky-side`_(string)_ decide which side should be sticky, you can set `top`、`bottom` or `both` (default: `top`)

```HTML
<div sticky-container>
  <div v-sticky sticky-offset="offset" sticky-side="both">
    ...
  </div>
</div>
```
```JavaScript
export defaults {
  data () {
    offset: {
      top: 0, // set the top breakpoint
      bottom: 44 // set the bottom breakpoint
    }
  }
}
```

# On/off switch

An expression that evaluates to false set on `v-sticky` can be used to disable stickiness condtionally.

```HTML
<div sticky-container>
  <div v-sticky="shouldStick">
    ...
  </div>
</div>
```
```JavaScript
export defaults {
  data () {
    shouldStick: false
  }
}
```

# License

MIT

# Reference/Source

Base on the package `mehwww/vue-sticky-directive`, this package fixed the bugs exist in the original package and also provide the continuous support.

[Vue-stick-directive](https://github.com/mehwww/vue-sticky-directive)