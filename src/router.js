import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import HelloVueRouter from './components/HelloVueRouter'
import User from './components/User'
import ErrorNotFound from './components/ErrorNotFound'
import Phone from './components/Phone'
import Query from './components/query'
import NameView from './components/NameView'

Vue.use(VueRouter)

// 2.定义路由

const routes = [
    { path: '/', component: HelloWorld },  
    { path: '/bar', component: HelloVueRouter},
    { path: '/user/:id/username/:nam', 
      name: 'user',//命名路由
      props: true,
      component: User,
      beforeEnter: (to, from, next) => {
        window.console.log(to.path, from.path, next())
      } 
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
  
  export const router =  new VueRouter({
    routes
  })
// 全局前置守卫
  // router.beforeEach((to, from, next) => {
  //   // window.console.log(to, from, next)
  // })

  // 全局解析守卫
  // router.beforeResolve

  //全局后置钩子
  // router.afterEach((to, from) => {
  //   window.console.log(to.path, from.path)
  // })
  //组件内使用
  // beforeRouteEnter (to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  // },
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  // },
  // beforeRouteLeave (to, from, next) {
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  // }