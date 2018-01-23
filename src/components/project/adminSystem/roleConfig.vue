<template>
    <div id="roleConfig">
      <div style="margin: 12px 0;">
        <template>
          <Row>
            <Col span="24" style="display: flex;justify-content: flex-end;">
            <Button type="primary"  @click="addModalShow = true" style="margin-left: 12px;">新增</Button>
            <Button type="primary" icon="ios-search" @click="getList()" style="margin-left: 12px;">搜索</Button>
            </Col>
          </Row>
        </template>
      </div>
      <!--表格-->
      <div class="list">
        <template v-if="count">
          <!--table列表-->
          <Table :loading="loading" :columns="columnsTitle" :data="columnsItems" stripe></Table>
          <!--分页-->
          <div style="display: flex; justify-content: flex-end;margin: 12px 0;">
            <Page :total="count" :page-size='pageSize' @on-change="pageChange" show-total show-elevator></Page>
          </div>
        </template>
      </div>

      <!--新增-->
      <template>
        <Modal
          v-model="addModalShow"
          title="添加权限"
          :loading="addLoading"
          @on-ok="addOk"
          @on-cancel="addCancel">
          <Form :model="addFormItem" :label-width="80">
            <FormItem label="名称">
              <Input v-model="addFormItem.no" placeholder="请输入内容..."></Input>
            </FormItem>
            <template>
              <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                <Checkbox
                  :indeterminate="indeterminate"
                  :value="checkAll"
                  @click.prevent.native="handleCheckAll">数据字典</Checkbox>
              </div>
              <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <Checkbox label="香蕉"></Checkbox>
                <Checkbox label="苹果"></Checkbox>
                <Checkbox label="西瓜"></Checkbox>
                <Checkbox label="1"></Checkbox>
                <Checkbox label="2"></Checkbox>
                <Checkbox label="3"></Checkbox>
              </CheckboxGroup>
            </template>
            <FormItem label="权限名称">
              <Input v-model="addFormItem.name" placeholder="请输入内容..."></Input>
            </FormItem>
            <FormItem label="备注">
              <Input v-model="addFormItem.remark" placeholder="请输入内容..."></Input>
            </FormItem>
          </Form>
        </Modal>
      </template>
    </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        addModalShow: false,
        addLoading: true,
        addFormItem: {},
        // 多选框
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜'],
        // 已下列表分页
        pageSize: 20, // 每页显示20条数据
        currentPage: 1, // 当前页码
        count: 0,  // 总记录数
        loading: false,   // 列表数据加载中
        columnsItems: [], // 列表数据
        columnsTitle: [   // 列表标题
          {title: '序号', type: 'index', align: 'center'},
          {title: '名称', key: 'name', align: 'center'},
          {title: '备注', key: 'remark', align: 'center'},
          { title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log('修改')
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log('删除')
                    }
                  }
                }, '删除')
              ])
            }
          }
        ]
      }
    },
    created: function () {
      // 请求第一页数据
      this.getList()
    },
    methods: {
      // 获取数据
      getList () {
        this.loading = true  // 打开列表数据加载中动画
        // 模拟
        let url = '/wsmanagement/admin/role/find'
        let postData = {
          begin: this.pageSize * (this.currentPage - 1),
          rows: this.pageSize
        }
        this.$http.post(url, postData, {'emulateJSON': true, 'emulateHTTP': true})
          .then(({body}) => {
            // 子组件监听到count变化会自动更新DOM
            console.log(body)
            this.count = body.count   // 列表数据总条数
            this.columnsItems = body.content   // 列表数据内容
            this.loading = false  // 关闭列表数据加载中动画
          })
      },
      // 从page组件传递过来的当前page
      pageChange (page) {
        console.log('当前页码：' + page)
        this.currentPage = page
        this.getList()
      },
      addOk () {
        this.$Message.success('成功')
      },
      addCancel () {
        this.$Message.info('取消添加')
      },
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false
        } else {
          this.checkAll = !this.checkAll
        }
        this.indeterminate = false

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜']
        } else {
          this.checkAllGroup = []
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false
          this.checkAll = true
        } else if (data.length > 0) {
          this.indeterminate = true
          this.checkAll = false
        } else {
          this.indeterminate = false
          this.checkAll = false
        }
      }
    },
    beforeDestory: function () {
      console.log('------beforeDestory------')
    },
    destoryed: function () {
      console.log('------destoryed------')
    }
  }
</script>
