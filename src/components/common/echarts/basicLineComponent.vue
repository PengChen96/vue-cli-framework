<template>
  <div>
    <div ref="line" style="width: 100%;height: 600px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: '',
    props: {
      title: {
        title: String,
        default: '折线图'
      },
      data: {
        type: Array,
        default: function () {
          return [50, 180, 100, 180, 100, 180, 50]
        }
      },
      xdata: {
        type: Array,
        default: function () {
          return ['一', '二', '三', '四', '五', '六', '七']
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
        let colors = ['#5793f3', '#d14a61', '#675bba']
        this.charts = echarts.init(this.$refs.line)
        this.charts.setOption({
          color: colors,
          title: {
            text: this.title,
            textStyle: {
              color: colors[1]
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['bar', 'stack', 'tiled']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: this.xdata
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.data,
            type: 'line',
            smooth: true
          }]
        })
      }
    }
  }
</script>
