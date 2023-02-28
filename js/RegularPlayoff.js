var tsaiji = []
var cdefen = []
var clanban = []
var czhugong = []
var jdefen = []
var jlanban = []
var jzhugong = []

var cdisplay = []
var jdisplay = []

var Regular_Playoff = [
  {
    "赛季": "05-06",
    "球队": "骑士",
    "季后赛得分": 30.8,
    "季后赛篮板": 8.1,
    "季后赛助攻": 5.8,
    "常规赛得分": 31.4,
    "常规赛篮板": 7,
    "常规赛助攻": 6.6
  },
  {
    "赛季": "06-07",
    "球队": "骑士",
    "季后赛得分": 25.1,
    "季后赛篮板": 8.1,
    "季后赛助攻": 8,
    "常规赛得分": 27.3,
    "常规赛篮板": 6.7,
    "常规赛助攻": 6
  },
  {
    "赛季": "07-08",
    "球队": "骑士",
    "季后赛得分": 28.2,
    "季后赛篮板": 7.8,
    "季后赛助攻": 7.6,
    "常规赛得分": 30,
    "常规赛篮板": 7.9,
    "常规赛助攻": 7.2
  },
  {
    "赛季": "08-09",
    "球队": "骑士",
    "季后赛得分": 35.3,
    "季后赛篮板": 9.1,
    "季后赛助攻": 7.3,
    "常规赛得分": 28.4,
    "常规赛篮板": 7.6,
    "常规赛助攻": 7.2
  },
  {
    "赛季": "09-10",
    "球队": "骑士",
    "季后赛得分": 29.1,
    "季后赛篮板": 9.3,
    "季后赛助攻": 7.6,
    "常规赛得分": 29.7,
    "常规赛篮板": 7.3,
    "常规赛助攻": 8.6
  },
  {
    "赛季": "10-11",
    "球队": "热火",
    "季后赛得分": 23.7,
    "季后赛篮板": 8.4,
    "季后赛助攻": 5.9,
    "常规赛得分": 26.7,
    "常规赛篮板": 7.5,
    "常规赛助攻": 7
  },
  {
    "赛季": "11-12",
    "球队": "热火",
    "季后赛得分": 30.3,
    "季后赛篮板": 9.7,
    "季后赛助攻": 5.6,
    "常规赛得分": 27.1,
    "常规赛篮板": 7.9,
    "常规赛助攻": 6.2
  },
  {
    "赛季": "12-13",
    "球队": "热火",
    "季后赛得分": 25.9,
    "季后赛篮板": 8.4,
    "季后赛助攻": 6.6,
    "常规赛得分": 26.8,
    "常规赛篮板": 8,
    "常规赛助攻": 7.3
  },
  {
    "赛季": "13-14",
    "球队": "热火",
    "季后赛得分": 27.4,
    "季后赛篮板": 7.1,
    "季后赛助攻": 4.8,
    "常规赛得分": 27.1,
    "常规赛篮板": 6.9,
    "常规赛助攻": 6.3
  },
  {
    "赛季": "14-15",
    "球队": "骑士",
    "季后赛得分": 30.1,
    "季后赛篮板": 11.3,
    "季后赛助攻": 8.5,
    "常规赛得分": 25.3,
    "常规赛篮板": 6,
    "常规赛助攻": 7.4
  },
  {
    "赛季": "15-16",
    "球队": "骑士",
    "季后赛得分": 26.3,
    "季后赛篮板": 9.5,
    "季后赛助攻": 7.6,
    "常规赛得分": 25.3,
    "常规赛篮板": 7.4,
    "常规赛助攻": 6.8
  },
  {
    "赛季": "16-17",
    "球队": "骑士",
    "季后赛得分": 32.8,
    "季后赛篮板": 9.1,
    "季后赛助攻": 7.8,
    "常规赛得分": 26.4,
    "常规赛篮板": 8.6,
    "常规赛助攻": 8.7
  },
  {
    "赛季": "17-18",
    "球队": "骑士",
    "季后赛得分": 34,
    "季后赛篮板": 9.1,
    "季后赛助攻": 9,
    "常规赛得分": 27.5,
    "常规赛篮板": 8.6,
    "常规赛助攻": 9.1
  },
  {
    "赛季": "19-20",
    "球队": "湖人",
    "季后赛得分": 27.6,
    "季后赛篮板": 10.8,
    "季后赛助攻": 8.8,
    "常规赛得分": 25.3,
    "常规赛篮板": 7.8,
    "常规赛助攻": 10.2
  }
]
function Init () {
  var data = Regular_Playoff
  for (var i = 0; i < 14; i++) {
    cdefen.push(data[i].常规赛得分)
    clanban.push(data[i].常规赛篮板)
    czhugong.push(data[i].常规赛助攻)
    jdefen.push(data[i].季后赛得分)
    jlanban.push(data[i].季后赛篮板)
    jzhugong.push(data[i].季后赛助攻)
    tsaiji.push(data[i].赛季)
  }
  cdisplay = cdefen.concat()
  jdisplay = jdefen.concat()
  Draw()
}
function Draw () {
  var dom = document.getElementById('echart2')
  var myChart = echarts.init(dom)
  option = null
  option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        console.log(params)
        if (cdisplay[0] == cdefen[0] && jdisplay[0] == jdefen[0]) {
          if (params[1] == undefined) {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[0].marker +
              params[0].seriesName +
              params[0].data +
              '分'
            )
          } else {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[1].marker +
              '季后赛：' +
              params[1].data +
              '分' +
              '<br>' +
              params[0].marker +
              '常规赛：' +
              params[0].data +
              '分'
            )
          }
        } else {
          if (params[1] == undefined) {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[0].marker +
              params[0].seriesName +
              params[0].data +
              '个'
            )
            console.log('季后赛')
          } else {
            return (
              params[0].name +
              '赛季' +
              '<br>' +
              params[1].marker +
              '季后赛：' +
              params[1].data +
              '个' +
              '<br>' +
              params[0].marker +
              '常规赛：' +
              params[0].data +
              '个'
            )
          }
        }
      },
    },
    legend: {
      data: ['常规赛', '季后赛'],
      textStyle: {
        color: '#ffffff',
      },
      // itemWidth: 20,
      // itemHeight: 20,
    },
    grid: {
      top: '10%',
      left: '3%',
      right: '6%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      name: '赛季',
      type: 'category',
      boundaryGap: false,
      data: tsaiji,
      axisLabel: { textStyle: { color: '#ffffff' } }, //设置轴字的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff', //设置轴线的属性
          //设置线条粗细
        },
      },
    },
    yAxis: {
      name: '数据',
      type: 'value',
      axisLabel: { textStyle: { color: '#ffffff' } }, //设置轴线的属性
      axisLine: {
        lineStyle: {
          color: '#ffffff',
        },
      },
    },
    series: [
      {
        name: '常规赛',
        type: 'line',
        color: '#9400D3', //线的颜色
        data: cdisplay,
        // smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4,
            },
          },
        },
      },
      {
        name: '季后赛',
        type: 'line',
        color: '#FFD700',
        data: jdisplay,
        // smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4,
            },
          },
        },
      },
    ],
  }
  if (option && typeof option === 'object') {
    myChart.setOption(option, true)
  }
}

Init()

$('#b_jdefen').click(function () {
  cdisplay.length = 0
  jdisplay.length = 0
  cdisplay = cdefen.concat()
  jdisplay = jdefen.concat()
  Draw()
})

$('#b_jlanban').click(function () {
  cdisplay.length = 0
  jdisplay.length = 0
  cdisplay = clanban.concat()
  jdisplay = jlanban.concat()
  Draw()
})

$('#b_jzhugong').click(function () {
  cdisplay.length = 0
  jdisplay.length = 0
  cdisplay = czhugong.concat()
  jdisplay = jzhugong.concat()
  Draw()
})
