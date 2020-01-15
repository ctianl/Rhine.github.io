<template>
  <div align='left'>
    <h3>{{$t('menu.heading')}}</h3>
    <el-button type="info" @click='changeBtn' size='small' :style='{background:$store.state.bgcolor,border:"null"}'>{{$t('menu.home')}}</el-button>
    <h3 class="title">{{$t('menu.usage')}}</h3>

    <p>{{$t('content.main1')}}</p>
    <p>{{$t('content.main2')}}</p>
    <p>{{$t('content.main3')}}</p>
  </div>
</template>
<script>
export default {
  name: "Language",
  methods:{
    changeBtn(){
      if(this.$i18n.locale === 'en'){
        this.$i18n.locale = 'zh'
      }else{
        this.$i18n.locale = 'en'
      }
    },
  
  }
};
</script>
<style scoped>
</style>