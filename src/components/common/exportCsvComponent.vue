<template>
  <div>
    <Table v-show="false" ref="table"></Table>
    <Button type="success" @click="exportExcel()" style="margin-left: 12px;">导出EXcel</Button>
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
      }
    },
    methods: {
      exportExcel () {
        this.$refs.table.exportCsv({
          filename: this.filename,
          columns: this.titleData,
          data: this.listData
        })
      }
    }
  }
</script>
