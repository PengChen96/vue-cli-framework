/**
 * Created by pc on 2018/1/25.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 权限列表
const getPermissionList = function (type) {
  if (type === 'admin') {
    return Vue.http.get('/adminPermissionList').then(({body}) => {
      return body
    })
  } else {   // user
    return Vue.http.get('/userPermissionList').then(({body}) => {
      return body
    })
  }
}

export { getPermissionList }
