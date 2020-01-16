<template>
  <div>
    <el-row :gutter="20">
      <!-- 左 -->
      <el-col :md="8" :sm="8" :xs="24">
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <el-row :gutter="20">
                <el-col :span="8">
                  <img :src="$store.getters.changeSrc" style="width:100%;height:100%" />
                </el-col>
                <el-col :span="16" align="left">
                  <!-- 这里展示的内容是动态的啊 -->
                  <p style="font-size:30px">{{name}}</p>
                  <p style="color:#909399">{{status}}</p>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <el-col :span="12" align="left">
                  <p>上次登录时间：</p>
                </el-col>
                <el-col :span="12" align="left">
                  <p>2019.7.19</p>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" align="left">
                  <p>上次登录地点：</p>
                </el-col>
                <el-col :span="12" align="left">
                  <p>北京</p>
                </el-col>
              </el-row>
              <div></div>
            </el-card>
          </el-col>
        </el-row>
        <br />
        <el-row>
          <el-col :span="24">
            <el-card shadow="hover">
              <div slot="header" class="clearfix" align="left">
                <span>语言详情</span>
                <el-divider></el-divider>

                <p>Vue</p>
                <el-progress :percentage="71.3" color="pink"></el-progress>
                <p>Javascript</p>
                <el-progress :percentage="24.1" color="cadetblue"></el-progress>
                <p>CSS</p>
                <el-progress :percentage="13.7" color="lightgreen"></el-progress>
                <p>HTML</p>
                <el-progress :percentage="5.9"></el-progress>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!-- 右 -->
      <el-col :md="16" :sm="16" :xs="24">
        <!-- 三个小box -->
        <el-row :gutter="20" tag="div">
          <!-- 第一个 -->
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px',}" shadow="hover">
              <el-row align="center" type="flex">
                <el-col
                  :span="8"
                  style="background:rgba(64, 160, 255, 0.479);color:white;font-size:60px;line-height:100px"
                >
                  <i class="el-icon-user" style></i>
                </el-col>
                <el-col :span="16">
                  <h1>用户访问量</h1>
                  <p>1234</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <!-- 第二个 -->
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px',}" shadow="hover">
              <el-row align="center" type="flex">
                <el-col
                  :span="8"
                  style="background:pink;color:white;font-size:60px;line-height:100px"
                >
                  <i class="el-icon-message-solid" style></i>
                </el-col>
                <el-col :span="16">
                  <h1>系统消息</h1>
                  <p>200</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
          <!-- 第三个 -->
          <el-col :span="8">
            <el-card :body-style="{ padding: '0px',}" shadow="hover">
              <el-row align="center" type="flex">
                <el-col
                  :span="8"
                  style="background:rgba(242, 249, 159, 1);color:white;font-size:60px;line-height:100px"
                >
                  <i class="el-icon-goods" style></i>
                </el-col>
                <el-col :span="16">
                  <h1>购入量</h1>
                  <p>321</p>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <br />
        <!-- 代办事项 -->
        <el-row>
          <el-col :span="24">
            <el-card :body-style="{ padding: '0px',}" shadow="hover">
              <div slot="header" align="left">
                <span>待办事项</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="addproject">添加</el-button>
              </div>
              <el-table
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                :cell-style="addTextDecoration" fit
              >
                <el-table-column  type="selection" label='打卡'></el-table-column>
                <el-table-column  prop="project" label='事项名称'>
                  <template slot-scope="scope">
                    <div v-if="show&&scope.$index==i">
                      <el-input v-model="scope.row.project"></el-input>
                    </div>
                    <div v-else>
                      <span>{{scope.row.project}}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column align='right'>
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index)">
                      <span v-if="show&&scope.$index==i">确定</span>
                      <span v-else>编辑</span>
                    </el-button>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :md="12" :sm="12" :xs="24">
        <el-card style="padding:0" shadow="hover">
          <div id="keyima" style="width:inherit;height:400px;"></div>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="12" :xs="24">
        <el-card style="padding:0" shadow="hover">
          <div id="main" style="width: inherit;height:400px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  name: "SystemHome",
  data() {
    return {
      tableData: [
        {
          id: 0,
          project: "背50个单词背50个单词背50个单词"
        },
        {
          id: 1,
          project: "三篇阅读三篇阅读三篇阅读"
        },
        {
          id: 2,
          project: "两张试卷两张试卷两张试卷"
        },
        {
          id: 3,
          project: "vue练习vue练习vue练习"
        },
        {
          id: 4,
          project: "后台管理系统项目后台管理系统项目"
        },
         {
          id: 5,
          project: "背50个单词背50个单词背50个单词"
        },
        {
          id: 6,
          project: "三篇阅读三篇阅读三篇阅读"
        },
          {
          id: 7,
          project: "vue练习vue练习vue练习"
        },
        {
          id: 8,
          project: "后台管理系统项目后台管理系统项目"
        },
      ],
      i: -1,
      multipleSelection: [],
      show: true
    };
  },
  methods: {
    handleSelectionChange(rere) {
      let arr = [];
      rere.forEach((val, index) => {
        this.tableData.forEach((v, i) => {
          if (val.id == v.id) {
            arr.push(i);
          }
        });
      });
      this.multipleSelection = arr;
    },

    handleDelete(index, row) {
      // console.log(row);
      this.tableData.splice(index, 1);
    },
    handleEdit(index) {
      // console.log(index);
      this.i = index;
      this.show = !this.show;
    },
    // hehe({row, column, rowIndex, columnIndex}){
    //     if(this.checkedId.indexOf(rowIndex)){return 'text-decoration:line-through'}

    // },
    addTextDecoration({ row, rowIndex }) {
      let arr = this.multipleSelection;
      for (let i = 0; i < arr.length; i++) {
        if (rowIndex === arr[i]) {
          return "text-decoration:line-through";
        }
      }
    },
    addproject() {
      let thisid = this.tableData[this.tableData.length - 1].id;
      let obj = {
        id: thisid + 1,
        project: ""
      };
      this.tableData.push(obj);
    }
  },
  computed: {
    status() {
      if (this.$store.state.roles[0] === "admin") {
        return "管理员";
      }
      if (this.$store.state.roles[0] === "editor") {
        return "编辑者";
      }
    },
    name(){
        return this.$store.state.roles[0]
    },
    
  },

  mounted() {
    let dom = document.getElementById("keyima");
    let myChart1 = echarts.init(dom);

    let main = document.getElementById("main");
    let myChart2 = echarts.init(main);

    myChart1.setOption({
      title: {
        text: "近五月各品类销售趋势图",
        left: "left"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["家电", "百货", "食品"],
        left: "right"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["6月", "7月", "8月", "9月", "10月"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "家电",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "百货",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "食品",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    });
    myChart2.setOption({
         title: {
        text: "近一周各品类销售趋势图",
        left: "left"
      },
      legend: {
          left:"right"
      },
      tooltip: {},
      dataset: {
        source: [
          ["product", "家电", "百货", "食品"],
          ["周一", 43.3, 85.8, 93.7],
          ["周二", 83.1, 73.4, 55.1],
          ["周三", 86.4, 65.2, 82.5],
          ["周四", 72.4, 53.9, 39.1],
          ["周五", 69.4, 53.9, 39.1],
        ]
      },
      xAxis: { type: "category" },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    });
  }
};
</script>
<style scoped>


</style>