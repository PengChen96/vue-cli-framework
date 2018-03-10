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
// require('./mock/testMock.js')
require('./mock/permissionMock.js')

Vue.use(VueResource)
Vue.use(iView)
Vue.use(Highlight)

Vue.config.productionTip = false

// Vue.http.get('/testMock').then(res => {
//  console.log(res)
// })
Vue.prototype.$_hasPermission = function (per) {
  let permissions = store.state.permissions.toString()
  // console.log(permissions)
  // 权限不存在 return false
  if (permissions.indexOf(per) === -1 && permissions.length > 0) {
    return false
  } else {
    return true
  }
}
Vue.directive('hasPermission', {
  bind: function (el, binding) {
    let isShow = Vue.prototype.$_hasPermission(binding.value)
    console.log(el)
    console.log(isShow)
    if (!isShow) {
      el.parentNode.removeChild(el)
    }
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
