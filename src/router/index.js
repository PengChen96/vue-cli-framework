import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import AdminPermission from '@/components/project/adminPermission'
// 例子
import HomeExample from '@/components/homeExample'
import Paging from '@/components/example/paging'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
      children: [
        {
          path: '/adminPermission',
          name: 'adminPermission',
          component: AdminPermission
        }
      ]
    },
    { // 例子
      path: '/example',
      name: 'example',
      component: HomeExample,
      children: [
        {
          path: '/example/paging',
          name: 'paging',
          component: Paging
        }
      ]
    }
  ]
})
