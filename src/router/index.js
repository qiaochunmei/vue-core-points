import Vue from 'vue'
import Router from 'vue-router'
import parent from '../components/pages/parent.vue'
import child from '../components/pages/child.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/child',
      name: 'child',
      component: child
    }
  ]
})
// 自动安装的vue-router，会在src文件夹下有一个router->index.js文件，在index.js文件中创建对象，引入所需的组件并配置路径
// 在创建的routers对象中，path配置了路由的路径，component配置了映射的组件
