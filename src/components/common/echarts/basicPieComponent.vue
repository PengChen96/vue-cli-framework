<template>
  <div>
    <div ref="pie" style="width: 100%;height: 600px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: '',
    props: {
      title: {
        title: String,
        default: '饼图'
      },
      data: {
        type: Array,
        default: function () {
          return [
            {value: 335, name: 'AAA'},
            {value: 310, name: 'BBB'},
            {value: 234, name: 'CCC'},
            {value: 135, name: 'DDD'},
            {value: 548, name: 'EEE'}
          ]
        }
      }
    },
    data () {
      return {
        charts: ''
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawLine()
      })
    },
    methods: {
      drawLine () {
        this.charts = echarts.init(this.$refs.pie)
        this.charts.setOption({
          title: {
            text: this.title,
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
//            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            data: this.data.map(function (item) {
              return item.name
            })
          },
          series: [
            {
              name: '来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: this.data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    }
  }
</script>
