<template>
  <div>
    <div id="wrap" :style="{height:bodyH}">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="form">
        <h1 style="color:white">后台管理系统</h1>
        <el-form-item prop="username">
          <el-input  v-model="ruleForm.username">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" show-password>
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button plain @click="submitForm('ruleForm')" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from "../network/index";
export default {
  name: "Login",
  computed: {
    bodyH() {
      return window.innerHeight + "px";
    }
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      } else if (this.users.indexOf(value) === -1) {
        return callback(new Error("用户名不存在"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度不得小于6"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      users: ["admin", "editor"]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //表格验证通过，我们开始切换页面
          this.$store.dispatch("LoadByUsername", this.ruleForm);

          //进入首页
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {}
};
</script>
<style scoped>
#wrap {
  height: 100%;
  align-self: auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  background-image: url("https://images.unsplash.com/photo-1487284122274-e864e9dec2bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
  filter: alpha(opacity=50);
  background-size: cover;
  font-family: "Courier New", Courier, monospace;
}
.form {
  width: fit-content;
  margin: auto;
  box-shadow: 0 0 20px white;
  padding: 30px;
}
.form /deep/ .el-form-item.is-error .el-input__inner, .el-form-item.is-error .el-input__inner:focus, .el-form-item.is-error .el-textarea__inner, .el-form-item.is-error .el-textarea__inner:focus, .el-message-box__input input.invalid, .el-message-box__input input.invalid:focus{
  border-color:white;
}
.form /deep/ .el-form-item__error{
  color:black;
  text-indent: 4em;
}
</style>
