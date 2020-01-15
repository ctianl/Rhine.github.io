<template>
  <div>
    <div v-if="$route.path==='/basicinput'">
      <el-row>
        <el-col
          :md="{span:14,offset:5}"
          :lg="{span:14,offset:5}"
          :sm="{span:18,offset:3}"
          :xs="{span:24,offset:0}"
        >
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-position="right"
            label-width="100px"
          >
            <el-form-item label="店铺名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="address">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="店铺简介">
              <el-input v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="店铺标语">
              <el-input v-model="form.logo"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类">
              <div style="text-align:left">
                <el-cascader v-model="form.category" :options="options" @change="handleChange"></el-cascader>
              </div>
            </el-form-item>
            <el-form-item label="店铺特点">
              <div style="text-align:left">
                <el-row>
                  <el-switch v-model="form.value1" active-text="品牌保证" style="margin-right:20px"></el-switch>
                  <el-switch v-model="form.value3" active-text="蜂鸟专送" style="margin-right:20px"></el-switch>
                  <el-switch v-model="form.value2" active-text="新开店铺"></el-switch>
                </el-row>
                <el-row>
                  <el-switch v-model="form.value4" active-text="准时达" style="margin-right:20px"></el-switch>
                  <el-switch v-model="form.value5" active-text="外卖保" style="margin-right:20px"></el-switch>
                  <el-switch v-model="form.value6" active-text="开发票"></el-switch>
                </el-row>
              </div>
            </el-form-item>
            <el-form-item label="配送费">
              <div style="text-align:left">
                <el-input-number v-model="form.goodsPrice" :min="0"></el-input-number>
              </div>
            </el-form-item>
            <el-form-item label="起送价">
              <div style="text-align:left">
                <el-input-number v-model="form.startPrice" :min="0"></el-input-number>
              </div>
            </el-form-item>

            <el-form-item label="请上传店铺头像" ref="uploadElement" prop="image">
              <div style="text-align:left">
                <el-input v-model="form.image" v-if="false"></el-input>
                <el-upload
                  class="avatar-uploader"
                  ref="upload"
                  list-type="picture-card"
                  :show-file-list="false"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :before-upload="beforeUpload"
                  :on-change="handleChange"
                  :auto-upload="false"
                  :data="form"
                >
                  <img v-if="form.image" :src="form.image" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </el-form-item>

            <el-form-item label="请上传营业执照" ref="uploadElement" prop="license">
              <div style="text-align:left">
                <el-input v-model="form.license" v-if="false"></el-input>
                <el-upload
                  class="avatar-uploader"
                  ref="upload1"
                  list-type="picture-card"
                  :show-file-list="false"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :before-upload="beforeUpload"
                  :on-change="handleChange1"
                  :auto-upload="false"
                  :data="form"
                >
                  <img v-if="form.license" :src="form.license" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </el-form-item>

            <el-form-item label="请上传餐饮许可证" ref="uploadElement" prop="serve">
              <div style="text-align:left">
                <el-input v-model="form.serve" v-if="false"></el-input>
                <el-upload
                  class="avatar-uploader"
                  ref="upload2"
                  list-type="picture-card"
                  :show-file-list="false"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :before-upload="beforeUpload"
                  :on-change="handleChange2"
                  :auto-upload="false"
                  :data="form"
                >
                  <img v-if="form.serve" :src="form.serve" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </el-form-item>

            <el-form-item label="营业时间">
              <el-col :span="11">
                <el-time-picker placeholder="起始时间" v-model="form.date1" style="width: 100%;"></el-time-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="结束时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="优惠活动">
              <div style="text-align:left">
                <el-select v-model="form.good" placeholder="请选择优惠活动" @change="nice">
                  <el-option label="满减优惠" value="满减优惠"></el-option>
                  <el-option label="优惠大酬宾" value="优惠大酬宾"></el-option>
                  <el-option label="新用户立减" value="新用户立减"></el-option>
                  <el-option label="进店领券" value="进店领券"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item>
              <el-table :data="table" style="width: 100%" fit>
                <el-table-column prop="name" label="活动名称" align="center"></el-table-column>
                <el-table-column prop="more" label="活动详情"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      type="danger"
                      size="mini"
                      @click="deleteContent(scope.$index,scope.row)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item>
              <el-button type="info" :style="{background:$store.state.bgcolor,border:'none'}" @click="submitForm('form')">立即创建</el-button>
            </el-form-item>
          </el-form>

          <el-dialog :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="活动详情" label-width="100px">
                <el-input v-model="moreMessage" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="info" :style="{background:$store.state.bgcolor,border:'none'}" @click="sureBtnClick">确 定</el-button>
            </div>
          </el-dialog>
        </el-col>
      </el-row>
    </div>
    <keep-alive><router-view /></keep-alive> 
  </div>
</template>
<script>
export default {
  name: "RelevantInput",
  data() {
    return {
      dialogFormVisible: false,
      moreMessage: "",
      form: {
        name: "",
        address: "",
        phone: "",
        account: "",
        logo: "",
        category: ["yiguoliaoli", "rihangliaoli"],
        special: "",
        goodsPrice: 5,
        startPrice: 15,
        image: "",
        license: "",
        serve: "",
        date1: "",
        date2: "",
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: true,
        value6: true,
        good: "满减优惠"
      },
      options: [
        {
          value: "yiguoliaoli",
          label: "异国料理",
          children: [
            {
              value: "rihangliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayimian",
              label: "披萨意面"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        },
        {
          value: "kuaicanbiandang",
          label: "快餐便当",
          children: [
            {
              value: "jiancan",
              label: "简餐 "
            },
            {
              value: "gaijiaofan",
              label: "盖浇饭"
            },
            {
              value: "mifenmianguan",
              label: "米粉面馆"
            },
            {
              value: "baozizhoudian",
              label: "包子粥店"
            }
          ]
        },
        {
          value: "xiaochiyexiao",
          label: "小吃夜宵",
          children: [
            {
              value: "xiaolongxia",
              label: "小龙虾"
            },
            {
              value: "difangxiaochi",
              label: "地方小吃 "
            },
            {
              value: "shaokao",
              label: "烧烤"
            },
            {
              value: "zhajizhachuan",
              label: "炸鸡炸串"
            },
            {
              value: "yetuiluwei",
              label: "鸭脖卤味"
            }
          ]
        },
        {
          value: "guoshushengxian",
          label: "果蔬生鲜",
          children: [
            {
              value: "shuiguo",
              label: "水果"
            },
            {
              value: "shucai",
              label: "蔬菜"
            },
            {
              value: "shengxian",
              label: "生鲜"
            }
          ]
        }
      ],
      table: [{ name: "", more: "满30减5，满60减8" }],
      rules: {
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ],
        image: [{ required: true, message: "请上传店铺头像", trigger: "blur" }],
        license: [
          { required: true, message: "请上传营业执照", trigger: "blur" }
        ],
        serve: [
          { required: true, message: "请上传餐饮许可证", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    hehe() {
      return this.form.good;
    }
  },
  methods: {
    submitForm(formName) {
      let vm = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          vm.$refs.upload.submit();
          vm.$refs.upload1.submit();
          vm.$refs.upload2.submit();
          //显示成功上传
          this.$message({
            message: "成功上传信息",
            type: "success"
          });
          vm;
          //成功上传后将表单的内容移除
          vm.$refs["form"].resetFields();
          vm.$refs.upload.clearFiles();
          vm.$refs.upload1.clearFiles();
          vm.$refs.upload2.clearFiles();
        } else {
          this.$message.error("请按要求填写信息");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.form.image = "";
    },

    handleChange(file, fileList) {
      this.form.image = URL.createObjectURL(file.raw);
    },
    handleChange1(file, fileList) {
      this.form.license = URL.createObjectURL(file.raw);
    },
    handleChange2(file, fileList) {
      this.form.serve = URL.createObjectURL(file.raw);
    },
    beforeUpload(file) {
      return true;
    },
    nice() {
      //有一个dialog出现了
      this.dialogFormVisible = true;
    },
    sureBtnClick() {
      this.dialogFormVisible = false;
      let obj = {
        name: this.form.good,
        more: this.moreMessage
      };
      this.table.push(obj);
    },
    deleteContent(index, row) {
      this.table.splice(index, 1);
    }
  },
  created() {
    this.table[0].name = this.form.good;
  },
  mounted() {
    window.vue = this;
  }
};
</script>
<style scoped>
input[type="file"] {
  display: none;
}

.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader /deep/ .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}

.avatar {
  width: 160px;
  height: 160px;
  display: block;
}
</style>