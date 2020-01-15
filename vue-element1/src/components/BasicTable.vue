<template>
  <div>
    <div align="left">
      <el-button type="info" :style="{background:$store.state.bgcolor,border:'none'}" @click="removeBatch">批量删除</el-button>
    </div>

    <el-table :data="showTable" fit @selection-change="handleSelectionChange" ref="filterTable">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="ID" label="ID" sortable></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="price" label="账户余额"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.image" style="width:50px;height:50px" @click="imageClick(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column prop="location" label="地址" sortable></el-table-column>
      <el-table-column prop="date" label="注册日期" sortable></el-table-column>
      <el-table-column
        prop="status"
        label="状态（可筛选）"
        :filters="[{ text: '成功', value: '成功' }, { text: '失败', value: '失败' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === '成功' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div style="display:flex;flex-direction:row">
            <el-button  type="info" :style="{background:$store.state.bgcolor,border:'none'}" size="mini" @click="editData(scope.row,scope.$index)">编辑</el-button>
            <el-button type="danger" size="mini" @click="deleteData(scope.$index)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogTableVisible" :fullscreen="true" id="thisDialog">
      <img :src="showImage" alt />
    </el-dialog>

    <el-dialog title="编辑信息" :visible.sync="editBox" size="mini" id="changeDialog">
      <el-form :model="form" :label-position="'left'" :lock-scroll="true" label-width="80px">
        <el-form-item label="ID">
          <el-input v-model.lazy="form.ID" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账户余额">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <img :src="form.image" alt="头像展示" width="100px" align="left" style="margin-bottom:10px" />
          <el-input v-model="form.image" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="form.status" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="注册日期">
          <el-input v-model="form.date" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editBox = false">取 消</el-button>
        <el-button  type="info" :style="{background:$store.state.bgcolor,border:'none'}" @click="handleUpdate('form')">确 定</el-button>
      </div>
    </el-dialog>
    <el-col :span="24" class="toolbar" style="text-align:center">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next"
        :page-size="pagesize"
        :total="this.tableData.length"
        style="margin:30px"
      ></el-pagination>
    </el-col>
  </div>
</template>
<script>
import axios from "../network";
export default {
  name: "BasicTable",
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      showImage: "",
      editBox: false,
      form: {
        ID: "3",
        name: "dsd",
        image: "ssaa",
        date: "dssd",
        status: "sas",
        price: 9
      },
      i: 0,
      pagesize: 7, //设置每页显示条目个数为7
      currentPage: 1 //设置当前页默认为1
    };
  },
  computed: {
    showTable() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
    }
  },
  methods: {
    imageClick(row, index) {
      this.dialogTableVisible = true;
      this.showImage = row.image;
    },
    deleteData(index) {
      this.tableData.splice(index, 1);
    },
    editData(row, index) {
      this.editBox = true;
      this.i = index; //关键
      //表格展示row的内容，同时在表单改写的内容还是储存到this.form
      this.form = Object.assign({}, row);
    },
    handleUpdate(forName) {
      //对tableData进行修改，页面上的内容自然修改
      this.tableData.splice(this.i, 1, this.form);
      this.editBox = false;
    },
    handleSelectionChange(rere) {
      this.waitDeleteCheckbox = rere;
    },
    removeBatch() {
      var that = this;
      var val = this.waitDeleteCheckbox;
      if (val) {
        val.forEach(function(item, index) {
          that.tableData.forEach(function(itemI, indexI) {
            if (item === itemI) {
              that.tableData.splice(indexI, 1);
            }
          });
        });
      }
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.status;
    },
    filterTag(value, row) {
      return row.status === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    //设置当前页为点击页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    }
  },
  created() {
    axios.get("/news/gettable").then(res => {
      this.tableData = res.data.data.tableData;
    });
  },

};
</script>
<style scoped>
#thisDialog /deep/ .el-dialog {
  padding-top: 200px;
  background: rgba(0, 0, 0, 0.6);
}
#thisDialog /deep/ .el-dialog__headerbtn,
.el-dialog__close {
  font-size: 50px;
}
#changeDialog /deep/ .el-dialog {
  width: 600px;
  padding: 0;
  height: fit-content;
}
</style>