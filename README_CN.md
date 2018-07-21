# vuejs-sticky-directive
支持头部和底部sticky的功能, 使用的是原生js和vue的directive实现.

[📑English Document](https://github.com/TriDiamond/vuejs-sticky-directive/blob/master/README.md)

# 安装

```Bash
npm install vuejs-sticky-directive --save
```

ES2015 写法
```JavaScript
// 全局引入
import Sticky from 'vuejs-sticky-directive'
Vue.use(Sticky)

// 按需引入
import Sticky from 'vuejs-sticky-directive'
new Vue({
  directives: {Sticky}
})
```

# 使用

+ 使用 `v-sticky` 自定义指令开启某个元素的sticky定位
+ 使用 `sticky-*` 定义sticky的属性选项
+ Sticky元素会去选择最近的原生拥有`sticky-container`属性的元素作为相对定位的元素, 如果找不到, 就会去寻找父级node作为相对定位的元素

[basic example](https://mehwww.github.io/vue-sticky-directive/examples/basic/)

```HTML
<div sticky-container>
  <div v-sticky sticky-offset="offset" sticky-side="top">
    ...
  </div>
</div>
```

# Sticky的属性选项
* `sticky-offset`
  * `top`_(number)_ - 设置顶部偏移数 (默认: `0`)
  * `bottom`_(number)_ - 设置底部偏移数 (默认: `0`)
* `sticky-side`_(string)_ 设置固定的位置 `top`、`bottom` 或者 `both` (默认: `top`)

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
      top: 0, // 顶部偏移数
      bottom: 44 // 底部偏移数
    }
  }
}
```

# Sticky启用/关闭

`v-sticky`也支持开关机制, 可以根据情况进行启用. 只要给`v-sticky`赋true或者false就可以控制.

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

# 版权

MIT

# 来源

本项目是基于 `mehwww/vue-sticky-directive` 的项目代码, 只是进行了优化和持续的维护.

[Vue-stick-directive](https://github.com/mehwww/vue-sticky-directive)