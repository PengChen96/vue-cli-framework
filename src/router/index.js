import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homePage'
import Welcome from '@/components/project/welcome'
// 例子
import Paging from '@/components/example/paging'
import ExportCsv from '@/components/example/exportCsv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/example/paging',
          name: 'paging',
          component: Paging
        },
        {
          path: '/example/export_csv',
          name: 'exportCsv',
          component: ExportCsv
        }
      ]
    }
  ]
})
