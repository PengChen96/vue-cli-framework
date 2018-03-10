/**
 * Created by Administrator on 2018/3/10.
 */
import Mock from 'mockjs'

// 管理员权限
Mock.mock('/adminPermissionList', {
  'permissions': [
    'admin',
    'levelOne',
    'levelTwo',
    'levelThree',
    'levelFour',
    'levelFive',
    'levelSix'
  ]
})
// 普通用户权限
Mock.mock('/userPermissionList', {
  'permissions': [
    'user',
    'levelFour',
    'levelFive',
    'levelSix'
  ]
})
