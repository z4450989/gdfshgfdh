import Vue from 'vue'
import Router from 'vue-router'

// 路由文件
// import dhl from '@/components/my-all/my-all'
// 这里定义上面的交互教程灯内容的路由

import zhuti from '@/components//zhuti/zhuti'
import mydhla from '@/components/my-dhla/my-dhla'

// 这里是share话题
import share from '@/components/share/share'

// 这里定义进入app的页面
import jinru from '@/components/jinru/jinru'

console.log(mydhla);

Vue.use(Router)

export default new Router({
  // 这里增加了这个模式用来消除调路由后面的#号，原本是没有的
  // mode:'history',   这里设置后webpack打包后错误
  routes: [
     {
      path: '/',
      component: jinru,
     },
     {
      path: '/:tab',
      component: zhuti,
     },
     {
      path: '/:tab',
      component: mydhla,
     },
     {
      path: '/all/:tab',
      component: share,
     }
    // {
    //   path: '/*',
    //   redirect: '/topic/all'
    // }
  	]
})
