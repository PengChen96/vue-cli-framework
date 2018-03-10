/**
 * Created by Administrator on 2018/2/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  userAccount: sessionStorage.userAccount || '-1',  // 是否有用户登录
  permissions: sessionStorage.permissions || []     // 权限列表
}
const mutations = {
  setLoginUser (state, user) {
    state.userAccount = user
  },
  setPermissions (state, permissions) {
    state.permissions = permissions
  }
}
export default new Vuex.Store({
  state,
  mutations
})
