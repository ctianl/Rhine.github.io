<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="'未读消息（'+one+'）'" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="content" ></el-table-column>
          <el-table-column prop="time"></el-table-column>
          <el-table-column>
              <template slot-scope="scope">
                  <el-button size='mini' plain @click='readedBtnClick(scope.$index,scope.row)'>标为已读</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="'已读消息（'+two+'）'" name="second">
          <el-table :data="secondData" style="width: 100%">
          <el-table-column prop="content" ></el-table-column>
          <el-table-column prop="time"></el-table-column>
           <el-table-column>
              <template slot-scope="scope">
                  <el-button size='mini' type="danger" @click='deleteBtnClick(scope.$index,scope.row)'>删除</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="'回收站（'+three+'）'" name="third">
          <el-table :data="thirdData" style="width: 100%">
          <el-table-column prop="content" ></el-table-column>
          <el-table-column prop="time"></el-table-column>
          <el-table-column>
              <template slot-scope="scope">
                  <el-button size='mini' plain @click='backBtnClick(scope.$index,scope.row)'>还原</el-button>
              </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "Tab",
  data() {
    return {
      activeName: "second",
      tableData:[
          {content:"【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",time:"2018-04-19 20:00:00"},
          {content:"今晚12点整发大红包，先到先得",time:"2018-04-19 21:00:00"}
      ],
      secondData:[
          {content:"【商城】庆祝XXX成立20周年，年终福利！",time:"2020-01-12 20:00:00"}
      ],
      thirdData:[
          {content:"亲爱的xxx用户，绑定邮箱，账号会更安全",time:"2018-04-19 20:00:00"}
      ],
    };
  },
  computed:{
    one(){
      if(this.tableData.length==0){
        this.$store.commit('changeMessageBadge',false)
      }else{
        this.$store.commit('changeMessageBadge',true)

      }
      return this.tableData.length
    },
    two(){
      
      return this.secondData.length
    },
    three(){
      return this.thirdData.length
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    readedBtnClick(index,row){
        this.tableData.splice(index,1)
        this.secondData.push(row)
    },
    deleteBtnClick(index,row){
        this.secondData.splice(index,1)
        this.thirdData.push(row)
    },
    backBtnClick(index,row){
        this.thirdData.splice(index,1)
        this.secondData.push(row)
    }
  }
};
</script>
<style scoped>
</style>