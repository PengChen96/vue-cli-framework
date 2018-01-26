/**
 * Created by pc on 2018/1/25.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 学校列表
const getCollegeList = function () {
  return Vue.http.post('/wsmanagement/map/college').then(({body}) => {
    return body
  })
}
// 角色列表
const getRoleList = function () {
  return Vue.http.post('/wsmanagement/map/role').then(({body}) => {
    return body
  })
}

export { getCollegeList, getRoleList }
