<template>
  <div>
    <div id="main" style="width: 100%;height: 600px;"></div>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: '',
    data () {
      return {
        charts: ''
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie('main')
      })
    },
    methods: {
      drawPie (id) {
        let lastWeek = ['上周一', '上周二', '上周三', '上周四', '上周五', '上周六', '上周日']
        let thisWeek = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        let colors = ['#5793f3', '#d14a61', '#675bba']
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          color: colors,
          title: {
            text: '本周收益总额：100',
            textStyle: {
              color: colors[1]
            },
            subtext: '上周收益总额：66',
            subtextStyle: {
              color: colors[0]
            }
          },
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['上周收益', '本周收益']
          },
          grid: {
            top: 70,
            bottom: 50
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
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[1]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '本周收益  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  }
                }
              },
              data: thisWeek
            },
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLine: {
                onZero: false,
                lineStyle: {
                  color: colors[0]
                }
              },
              axisPointer: {
                label: {
                  formatter: function (params) {
                    return '上周收益  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  }
                }
              },
              data: lastWeek
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '上周收益',
              type: 'line',
              xAxisIndex: 1,
              smooth: true,
              data: [2.6, 5.9, 9.0, 6.4, 8.8, 6.0, 2.3]
            },
            {
              name: '本周收益',
              type: 'line',
              smooth: true,
              data: [3.9, 5.9, 6.6, 5.4, 8.4, 10.3, 0.7]
            }
          ]
        })
      }
    }
  }
</script>
