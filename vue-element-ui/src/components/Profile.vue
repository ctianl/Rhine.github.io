<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="6" :sm="6" :xs="24">
        <el-card>
          <div slot="header" align="left">
            <span>个人信息</span>
          </div>
          <img :src="$store.getters.changeSrc" style="width:100px;height:100px;border-radius:50%" />
          <h4>{{$store.state.roles[0]}}</h4>
          <p>{{status}}</p>
        </el-card>
        <br>
        <el-card>
          <div slot="header" align="left">
            <span>项目情况</span>
          </div>
          <div style="height: 150px;">
            <el-steps direction="vertical" :active="2">
          
              <el-step title="Update Github template" icon="el-icon-check"></el-step>
              <el-step title="Build Template" icon="el-icon-check"></el-step>
            <el-step title="Release New Version" icon="el-icon-check"></el-step>
            </el-steps>
          </div>
        </el-card>
      </el-col>
      <el-col :md="18" :sm="18" :xs="24">
        <el-card>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="访客留言" name="first">
              <div v-for="(i,index) in msg" :key="index" align="left">
                <h3 style="display:flex;align-items:center">
                  <img :src="i.img" style="width:50px;height:50px;border-radius:50%" />
                  {{i.name}}
                </h3>
                <p>{{i.para}}</p>
                <el-button size="mini" @click="deleteBtn(index)" align="right">删除</el-button>
                <el-divider></el-divider>
              </div>
              <h3 style="display:flex;align-items:center">
                <img :src="img" style="width:50px;height:50px;border-radius:50%" />Ann
              </h3>
              <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item>
                  <img src="../assets/img1.jpg" alt style="height:200px" />
                </el-carousel-item>
                 <el-carousel-item>
                  <img src="../assets/img2.jpg" alt style="height:200px" />
                </el-carousel-item>
                 <el-carousel-item>
                  <img src="../assets/img3.jpg" alt style="height:200px" />
                </el-carousel-item>
                 <el-carousel-item>
                  <img src="../assets/img4.jpg" alt style="height:200px" />
                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
            <el-tab-pane label="添加留言" name="second">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="头像地址" prop="img">
                  <el-input v-model="ruleForm.img"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="留言" prop="para">
                  <el-input v-model="ruleForm.para"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "../network/index";
export default {
  name: "Profile",
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        para: [{ required: true, message: "请输入留言内容", trigger: "blur" }],
        img: [{ required: true, message: "请输入头像地址", trigger: "blur" }]
      },
      activeName: "first",
     
      msg: [],
      ruleForm: {
        img: "",
        name: "",
        para: ""
      },
      img:
        "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/a2861cf0ly8g3twuv5z6fj20u00u0mym.jpg?KID=imgbed,tva&Expires=1579101582&ssig=uU%2BRY9tvBE"
    };
  },
  computed: {
    status() {
      if (this.$store.state.roles[0] === "admin") {
        return "管理员";
      }
      if (this.$store.state.roles[0] === "editor") {
        return "编辑者";
      }
    }
  },
  methods: {
    deleteBtn(index) {
      this.msg.splice(index, 1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      let data = this.ruleForm;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: "/news/addPara",
            method: "post",
            data
          });
          this.msg.push(data);
          console.log(msg);
          this.$message({
            message: "成功上传留言",
            type: "success"
          });
          this.$refs["ruleForm"].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    let vm = this;
    axios.get("/news/visitor").then(res => {
      vm.msg = res.data.data;
      console.log(vm.msg);
    });
  }
};
</script>