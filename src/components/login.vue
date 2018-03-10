<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
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
          { required: true, message: '请输入用户名.', trigger: 'blur' }
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
            })
            this.$router.push('/welcome')
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
