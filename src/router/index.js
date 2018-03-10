import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Login from '@/components/login'
import HomePage from '@/components/homePage'
import Welcome from '@/components/project/welcome'
// 例子
import Paging from '@/components/example/paging'
import ExportCsv from '@/components/example/exportCsv'
import BasicLine from '@/components/example/echarts/basicLine'
import BasicPie from '@/components/example/echarts/basicPie'

Vue.use(Router)

let baseRoute = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: HomePage,
    meta: {
      requireLogin: true
    },
    children: [
      {
        path: '/welcome',
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
      },
      {
        path: '/example/echarts/basic_line',
        name: 'basicLine',
        component: BasicLine
      },
      {
        path: '/example/echarts/basic_pie',
        name: 'basicPie',
        component: BasicPie
      }
    ]
  }
]
let router = new Router({
  routes: baseRoute
})

router.beforeEach((to, from, next) => {
  let userAccount = store.state.userAccount
  console.log(userAccount)
  if (to.matched.some(record => record.meta.requireLogin)) {
    if (userAccount === '-1') {
      next()
      router.push({path: '/', query: { redirect: to.fullPath }})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
