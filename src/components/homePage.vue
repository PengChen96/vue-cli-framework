<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Header style="z-index: 1;">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-person"></Icon>
              {{userAccount}}
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4" @click.native="logOut()">
              <Icon type="power"></Icon>
              注销
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu accordion active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="breadRoute">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-home"></Icon>
                首页
              </template>
              <MenuItem name="首页" @click.native="route('/welcome')">首页</MenuItem>
            </Submenu>
            <Submenu name="2" v-hasPermission="'admin'">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                基本
              </template>
              <MenuItem name="基本/分页" @click.native="route('/example/paging')">分页</MenuItem>
              <MenuItem name="基本/导出Csv" @click.native="route('/example/export_csv')">导出Csv</MenuItem>
            </Submenu>
            <Submenu name="3" v-hasPermission="'admin'">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                图表
              </template>
              <MenuItem name="图表/折线图" @click.native="route('/example/echarts/basic_line')">折线图</MenuItem>
              <MenuItem name="图表/饼图" @click.native="route('/example/echarts/basic_pie')">饼图</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0'}">
          <Breadcrumb :style="{margin: '4px 24px'}" >
            <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
            <BreadcrumbItem v-for="x in breadcrumb" v-bind:key="x">{{x}}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '12px 24px', height: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
          <div>
            <p style="text-align: center;color:#999;">Copyright©2014-2017 XXXX公司 版权所有 浙ICP备xxxxxx</p>
          </div>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: 'homePage',
    data () {
      return {
        breadcrumb: ['清衣舍管理后台'],    // 面包屑导航
        userAccount: sessionStorage.userAccount    // 用户
      }
    },
    methods: {
      route: function (urlPath) {
        this.$router.push(urlPath)
      },
      breadRoute: function (name) {
        this.breadcrumb = name.split('/')
      },
      // 注销
      logOut: function () {
        sessionStorage.removeItem('userAccount')
        sessionStorage.removeItem('permissions')
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .layout{
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
    position: relative;
    /*border-radius: 4px;*/
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .ivu-layout-sider{
    box-shadow: 0 0 1px 3px #eee;
  }
  .ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
  }
  .ivu-layout-content{
    overflow-y: scroll;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  .ivu-layout-content::-webkit-scrollbar
  {
    width: 8px;
    height: 8px;
    background-color: #F5F5F5;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  .ivu-layout-content::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  /*定义滑块 内阴影+圆角*/
  .ivu-layout-content::-webkit-scrollbar-thumb
  {
    border-radius: 6px;
    background-color: #888;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
  }
</style>
