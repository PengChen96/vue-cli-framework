 
### 前端权限控制

大致思路：用户登录，访问后台接口，获取到该用户的权限列表，然后通过这个权限列表去控制菜单或按钮的显示隐藏；

#### 1. `login.vue`
##### 用户登录成功后，去请求接口获取权限列表，保存到sessionStorage中，然后跳转页面；
```javascript
// 获取角色权限
getPermissionList(this.formInline.user).then(body => {
  console.log(body)
  sessionStorage.permissions = body.permissions
  this.$store.commit('setPermissions', body.permissions)
}).then(res => {
  this.$router.push('/welcome')
})
```

#### 2. `main.js`
##### 如果配的权限存在于后台返回的权限列表中就显示，否则就把相关DOM移除；
```javascript
Vue.prototype.$_hasPermission = function (per) {
  let permissions = store.state.permissions.toString()
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
    if (!isShow) {
      el.parentNode.removeChild(el)
    }
  }
})
```

#### 3. 使用
```html
<div v-hasPermission="'admin'"></div>
```
或
```html
<div v-if="$_hasPermission('admin')"></div>
```