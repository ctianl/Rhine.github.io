<template>
  <div align='left'>
    <h2>只有用admin账号登录的才拥有管理员权限，才能进到这个页面</h2>
    <h3>可切换至editor身份,部分页面将看不到。</h3>
    <el-button type="info" :style="{background:$store.state.bgcolor,border:'none'}" @click="a">editor模式</el-button>
  </div>
</template>
<script>
export default {
  name: "Lint",
  methods: {
    a() {
      let vm=this
      this.$store.dispatch("GenerateRoutes", "editor")
    }
  }
};
</script>
<style scoped>
</style>