<template>
  <div>
    <el-row>
      <el-col :md="12" :sm="24" :xs="24" align='center'>
        <div id="keyima" style="width:400px;height:370px"></div>
      </el-col>
      <el-col :md="12" :sm="24" :xs="24" align='center'>
        <div id="third" style="width:400px;height:370px"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :md="12" :sm="24" :xs="24" align='center'>
        <div id="fourth" style="width:400px;height:370px"></div>
      </el-col>
      <el-col :md="12" :sm="24" :xs="24" align='center'>
        <div id="second" style="width:400px;height:370px"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
var echarts = require("echarts");
export default {
  name: "Echart",
  mounted() {
    let dom = document.getElementById("keyima");
    let myChart1 = echarts.init(dom);

    let second = document.getElementById("second");
    let myChart2 = echarts.init(second);

    let third = document.getElementById("third");
    let myChart3 = echarts.init(third);

    let fourth = document.getElementById("fourth");
    let myChart4 = echarts.init(fourth);

    myChart1.setOption({
     
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "Industries" },
            { value: 274, name: "Technology" },
            { value: 310, name: "Forex" },
            { value: 335, name: "Gold" },
            { value: 400, name: "Forecasts" }
          ],
          roseType: "angle"
        }
      ]
    });
    myChart2.setOption({
      angleAxis: {},
      radiusAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四"],
        z: 10
      },
      polar: {},
      series: [
        {
          type: "bar",
          data: [1, 2, 3, 4],
          coordinateSystem: "polar",
          name: "A",
          stack: "a"
        },
        {
          type: "bar",
          data: [2, 4, 6, 8],
          coordinateSystem: "polar",
          name: "B",
          stack: "a"
        },
        {
          type: "bar",
          data: [1, 2, 3, 4],
          coordinateSystem: "polar",
          name: "C",
          stack: "a"
        }
      ],
      legend: {
        show: true,
        data: ["A", "B", "C"]
      }
    }),
      myChart3.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      });

    myChart4.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["利润", "支出", "收入"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "value"
        }
      ],
      yAxis: [
        {
          type: "category",
          axisTick: {
            show: false
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        }
      ],
      series: [
        {
          name: "利润",
          type: "bar",
          label: {
            show: true,
            position: "inside"
          },
          data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
          name: "收入",
          type: "bar",
          stack: "总量",
          label: {
            show: true
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: "支出",
          type: "bar",
          stack: "总量",
          label: {
            show: true,
            position: "left"
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]
    });
  }
};
</script>
<style scoped>
</style>