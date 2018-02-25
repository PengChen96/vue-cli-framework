// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Highlight from './util/c-hightlight.js'

Vue.use(VueResource)
Vue.use(iView)
Vue.use(Highlight)

Vue.config.productionTip = false

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
