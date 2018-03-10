/**
 * Created by Administrator on 2018/3/10.
 */
import Mock from 'mockjs'

Mock.mock('/testMock', {
  'name': '@name',
  'age|1-100': 100,
  'number|1-3': '123',
  'gender|1': true,
  'hobby|2': {a: '篮球', b: '乒乓', c: '编程'},
  'color': '@color'
})
