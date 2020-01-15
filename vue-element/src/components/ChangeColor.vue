<template>
  <div align='left'>
    <h2>切换主题颜色</h2>
    <p>当前主题色：{{color1}}</p>

    <div class="block">
      <el-color-picker v-model="color1" @change="colorchange" show-alpha
  :predefine="predefineColors"></el-color-picker>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChangeColor",
  data(){
      return {
          color1:"rgba(119, 152, 187, 0.66)",
          predefineColors:['rgba(119, 152, 187, 0.66)','rgba(205,211,211,1)','rgba(155,194,155,1)','rgba(15, 111, 111, 0.4)','rgba(238, 29, 29, 0.66)','rgba(207, 127, 41, 0.66)','rgba(1, 10, 18, 0.56)']
      }
  },
  methods:{
      colorchange(color){
          this.$store.commit('changeBgcolor',color)
          this.color1=color
      }
  }
};
</script>