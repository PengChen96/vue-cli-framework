<template>
  <div>
    <mc-basic-pie></mc-basic-pie>
    <mc-basic-pie :title="title" :data="data"></mc-basic-pie>
  </div>
</template>
<script>
  import BasicPie from '@/components/common/echarts/basicPieComponent'
  export default {
    name: '',
    data () {
      return {
        title: '自定义饼图',
        data: [
          {value: 1, name: 'aaa'},
          {value: 2, name: 'bbb'},
          {value: 3, name: 'ccc'},
          {value: 4, name: 'ddd'},
          {value: 5, name: 'eee'}
        ]
      }
    },
    components: {
      'mc-basic-pie': BasicPie
    }
  }
</script>
