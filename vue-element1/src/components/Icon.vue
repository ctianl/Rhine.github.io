<template>
  <div>
    <div align="left" style="margin-bottom:20px">
      <h2>使用方法</h2>
      <i class="iconfont icon-s-open" style="font-size:20px">{{p}}</i>
      <br />
      <i class="iconfont icon-error" style="font-size:20px">{{pp}}</i>
      <br />
      <i class="iconfont icon-user" style="font-size:20px">{{ppp}}</i>
    </div>

    <div style="100%;height:800px;display:flex;flex-direction:row;flex-wrap:wrap">
      <i
        v-for="arr in array"
        :class="['iconfont',arr]"
        style="font-size:80px;width:150px"
        :key="arr"
      >
        <p style="font-size:20px">{{arr}}</p>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  data() {
    return {
      array: [
        "icon-arrow-left",
        "icon-arrow-d-right",
        "icon-arrow-down",
        "icon-close",
        "icon-arrow-right",
        "icon-location",
        "icon-arrow-up",
        "icon-backspace",
        "icon-user",
        "icon-edit",
        "icon-delete",
        "icon-align-right",
        "icon-lock",
        "icon-drag",
        "icon-align-left",
        "icon-bell",
        "icon-video-pause",
        "icon-text-underline",
        "icon-align-center",
        "icon-align-around",
        "icon-plus",
        "icon-creator",
        "icon-reduce",
        "icon-eye-hide",
        "icon-text",
        "icon-search",
        "icon-text-bold",
        "icon-s-open",
        "icon-strore-add",
        "icon-video-play",
        "icon-eye-view",
        "icon-text-italic",
        "icon-set",
        "icon-s-fold",
        "icon-book-edit",
        "icon-error",
        "icon-omit",
        "icon-check",
        "icon-warning",
        "icon-_fenlei",
        "icon-_geren",
        "icon-_biji",
        "icon-_jifen",
        "icon-_lianjie",
        "icon-_fuwu"
      ],
      p: "<i class='iconfont icon-s-open'>",
      pp: "<i class='iconfont icon-error'>",
      ppp: "<i class='iconfont icon-user'>"
    };
  }
};
</script>

<style  scoped>
@import "../assets/iconfont/iconfont";
</style>