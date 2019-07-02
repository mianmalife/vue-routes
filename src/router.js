import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from './components/HelloWorld'
import HelloVueRouter from './components/HelloVueRouter'
import User from './components/User'
import ErrorNotFound from './components/ErrorNotFound'
import Phone from './components/Phone'
import Query from './components/query'
import NameView from './components/NameView'

Vue.use(VueRouter)

// 2.定义路由

const routes = [
    { path: '/', redirect: '/bar' },   // 重定向
    { path: '/bar', component: HelloVueRouter, alias: '/view' },  // 别名
    { path: '/user/:id/username/:nam', 
      name: 'user',//命名路由
      props: true,
      component: User 
    },
    { path: '/phone/:id', component: Phone,
      children: [
        {
          path: 'query',
          component: Query
        }
      ]
    },
    {
      path: '/view',
      components: {
        test_view_name: NameView // 命名视图
      }
    },
    { path: '*', component: ErrorNotFound }
  ]
  
  // 3.创建router实例
  
  export default new VueRouter({
    routes
  })