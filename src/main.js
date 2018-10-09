// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 然后在main.js里面引入router文件
// 在创建的router对象中，如果不配置mode，就会使用默认的hash模式，该模式下会将路径格式化为#？开头
// 添加mode: 'history'之后将使用html5 history模式，该模式下没有#前缀，而且可以使用pushState和replaceState来管理记录

// 在构建的vue实例中，App.vue只是作为一个存放组件的容器，其中是用来渲染通过路由映射过来的组件，当路径更改时，其中的内容也会发生改变
