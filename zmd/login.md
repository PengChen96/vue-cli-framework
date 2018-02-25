### 用户是否登录功能实现

#### 1. `router/index.js`
##### 定义路由的时候配置```meta```字段（设置需要校验的路由）
```javascript
routes: [
    {
      path: '/',
      component: HomePage,
      meta: {
        requireLogin: true
      },
      children: [
        // 子页面
      ]
    }
  ]
```

#### 2. `main.js`
##### 使用 router.beforeEach 注册一个全局前置守卫
[导航守卫文档](https://router.vuejs.org/zh-cn/advanced/navigation-guards.html)
```javascript
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
```

#### 3. `vuex/store.js`
##### 使用vuex来标识用户是否登录的状态
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  userAccount: sessionStorage.userAccount || '-1'  // 是否有用户登录（‘-1’表示未登录）
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
```

#### 4. `login.vue`
##### 登录的时候改变状态
``` javascript
sessionStorage.userAccount = this.formInline.user
this.$store.commit('setLoginUser', this.formInline.user)
```
