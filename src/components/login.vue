<template>
  <div class="container">
    <div class="box">
      <h1>XX管理系统</h1>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')" long>登录</Button>
        </FormItem>
      </Form>
      <span class="sp">管理员账号: admin admin</span>&nbsp;&nbsp;
      <span class="sp">账号密码一致即可登录</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { getPermissionList } from '@/api/permissionApi.js'
export default {
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入账号.', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.formInline.user === this.formInline.password) {
            this.$Message.success('登录成功！')
            // 角色登录
            sessionStorage.userAccount = this.formInline.user
            this.$store.commit('setLoginUser', this.formInline.user)
            // 获取角色权限
            getPermissionList(this.formInline.user).then(body => {
              console.log(body)
              sessionStorage.permissions = body.permissions
              this.$store.commit('setPermissions', body.permissions)
            }).then(res => {
              this.$router.push('/welcome')
            })
          } else {
            this.$Message.error('账号与密码组合错误！')
          }
        } else {
          this.$Message.error('登录失败!')
        }
      })
    }
  }
}
</script>
<style lang="less">
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eee;
    .box{
      h1{
        margin-bottom: 12px;
        text-align: center;
      }
      width:360px;
      /*height:230px;*/
      background: #fff;
      margin-top: -160px;
      padding: 12px 24px;
      border:1px solid #eee;
      border-radius: 4px;
      box-shadow: 4px 6px 10px 1px #bbb;
      .sp{
        color: #aaa;
      }
    }
  }
</style>
