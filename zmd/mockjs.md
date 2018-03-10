### MockJs使用

#### 0. 安装
```bash
npm install mockjs --save
```

#### 1. `mock/testMock.js`
##### mock数据

```javascript
import Mock from 'mockjs'

Mock.mock('/testMock', {
  'name': '@name',
  'age|1-100': 100,
  'number|6-8': '123',
  'gender|1': true,
  'hobby|2': {a: '篮球', b: '乒乓', c: '编程'},
  'color': '@color'
})
```

#### 2. `main.js`
##### 引入
```javascript
require('./mock/testMock.js')
```
##### 使用
```javascript
Vue.http.get('/testMock').then(res => {
  console.log(res)
})
```