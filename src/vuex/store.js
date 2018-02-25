/**
 * Created by Administrator on 2018/2/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  userAccount: sessionStorage.userAccount || '-1'  // 是否有用户登录
}
const mutations = {
  setLoginUser (state, user) {
    state.userAccount = user
  }
}
export default new Vuex.Store({
  state,
  mutations
})
