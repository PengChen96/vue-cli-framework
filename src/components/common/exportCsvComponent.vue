<template>
  <div>
    <Table v-show="false" ref="table"></Table>
    <Button :type="btnType" @click="exportExcel()" :style="styleObj">导出Excel</Button>
  </div>
</template>
<script>
  export default {
    name: 'exportCsv',
    props: {
      titleData: {
        type: Array
      },
      listData: {
        type: Array
      },
      fileName: {
        type: String,
        default: '导出数据'
      },
      btnType: {
        type: String,
        default: 'success'
      },
      styleObj: {
        type: Object,
        default: function () {
          return {
            marginLeft: '12px'
          }
        }
      }
    },
    methods: {
      exportExcel () {
        this.$refs.table.exportCsv({
          filename: this.fileName,
          columns: this.titleData,
          data: this.listData
        })
      }
    }
  }
</script>
