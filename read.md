
## 后台管理 ##
基于Vue.js 2.x系列 + iView UI 的后台管理系统

[Vue.js](https://cn.vuejs.org/): 一套用于构建用户界面的渐进式框架

[vue-router](https://router.vuejs.org/zh-cn/): 路由插件

[vue-resource](https://github.com/pagekit/vue-resource): 进行Web请求和处理响应

[vux](https://vuex.vuejs.org/zh-cn/): 专为Vue.js设计的状态管理库

[iView](https://www.iviewui.com/docs/guide/install): UI组件库

## 功能 ##
- [x] iView UI
- [x] 表格
- [x] 表单
- [x] 导出Csv
- [x] 图表 :bar_chart:


## 目录结构介绍 ##

	|-- build                            // webpack编译配置文件目录
	|-- config                           // 项目配置目录
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|       |-- project                  // 主要路由页面
	|           |-- welcome.vue          // 首页
	|   |-- router                       // 路由
	|   |-- util                         // 公共方法 
	|   |-- vuex                         // 状态管理目录  
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- static                           // 静态资源
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件


## 安装步骤 ##

	git clone xxxx.git       // 把项目克隆到本地
	cd vue-cli-framework     // 进入模板目录
	npm install              // 安装项目依赖

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8089
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## 实现与使用

> [MockJs使用](https://github.com/PengChen96/vue-cli-framework/blob/master/zmd/mockjs.md)

> [用户是否登录功能实现](https://github.com/PengChen96/vue-cli-framework/blob/master/zmd/login.md)

> [前端权限控制](https://github.com/PengChen96/vue-cli-framework/blob/master/zmd/permission.md)

> [基本组件](https://github.com/PengChen96/vue-cli-framework/blob/master/zmd/basicUse.md)
