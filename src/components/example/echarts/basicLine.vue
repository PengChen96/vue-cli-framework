<template>
    <div>
      <mc-basic-line></mc-basic-line>
      <mc-basic-line :title="title" :data="data" :xdata="xdata"></mc-basic-line>
    </div>
</template>
<script>
  import BasicLine from '@/components/common/echarts/basicLineComponent'
  export default {
    name: '',
    data () {
      return {
        title: '自定义折线图',
        data: [5, 18, 10, 10, 1, 12, 5],
        xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    },
    components: {
      'mc-basic-line': BasicLine
    }
  }
</script>
