<template>
  <div>
    <mc-csv :titleData="titleData" :listData="listData"></mc-csv>
    <p v-highlight>
      <pre>
        <code class="javascript">
            test = {
                name : function () {
                    return 'hello';
                },
                age : function () {
                    return 13;
                }
            }
        </code>
      </pre>
    </p>
  </div>

</template>
<script>
  import ExportCsv from '../common/exportCsvComponent.vue'
  export default {
    name: 'exportCsv',
    data () {
      return {
        titleData: [
          {title: '序号', key: 'no'},
          {title: '名称', key: 'name'}
        ],
        listData: [
          {no: 'no1', name: 'name1'},
          {no: 'no2', name: 'name2'},
          {no: 'no3', name: 'name3'}
        ]
      }
    },
    components: {
      'mc-csv': ExportCsv
    }
  }
</script>
