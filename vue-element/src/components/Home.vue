<template>
  <div>
    <el-container :style="{height:changeHeight}">
      <el-header
        style="display:flex;flex-direction:row;align-items:center;height:70px;position:relative"
        :style="{background:$store.state.bgcolor}"
      >
        <div id="smallicon" @click="changeIcon">
          <i :class="iconName"></i>
        </div>
        <h1>后台管理系统</h1>
        <div
          style="position:absolute;right:10px;display:flex;width:180px;font-size:20px;flex-direction:row;justify-content:space-between;align-items:center"
        >
          <el-badge :is-dot="$store.state.messageBadge" class="item">
            <i class="el-icon-bell" @click="$router.push('/tab')"></i>
          </el-badge>

          <img :src="$store.getters.changeSrc" style="width:50px;height:50px;border-radius:50%" />
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link" style="font-size:20px">
              {{$store.state.roles[0]}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="b">个人中心</el-dropdown-item>
              <el-dropdown-item command="a">退出账户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-container :style="{height:changeHeight,overflowX:'scroll'}">
        <el-aside style="width:fit-content;overflow-y:hidden">
          <el-menu
            mode="verticle"
            :collapse="collapse"
            background-color="#eeefef"
            text-color="#666"
            :active-text-color="$store.state.bgcolor"
            align="left"
            router
            :collapse-transition="false"
            :style="{width:changeWidth,height:menuHeight,fontWeight:'bold',overflowY:'hidden'}"
            :default-active="route"
          >
            <!-- 一级菜单 -->
            <template v-for="(item,index) in showRouters">
              <el-submenu
                v-if="item.children&&item.children.length"
                :index="item.path"
                :key="index"
              >
                <template slot="title">
                  <i :class="item.meta.icon"></i>
                  <span>{{item.meta.title}}</span>
                </template>

                <!-- 二级菜单 -->
                <template v-for="(itemChild,index) in item.children">
                  <el-submenu
                    style="text-indent:1.5em"
                    v-if="itemChild.children&&itemChild.children.length"
                    :index="itemChild.path"
                    :key="index"
                  >
                    <template slot="title">
                      <span>{{itemChild.meta.title}}</span>
                    </template>

                    <!-- 三级菜单 -->
                    <el-menu-item
                      v-for="(itemChild_Child,index) in itemChild.children"
                      :index="itemChild_Child.path"
                      :key="index"
                    >
                      <span slot="title">{{itemChild_Child.meta.title}}</span>
                    </el-menu-item>
                  </el-submenu>

                  <el-menu-item v-else :index="itemChild.path" :key="index">
                    <span slot="title">{{itemChild.meta.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>

              <el-menu-item v-else :index="item.path" :key="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main tag="div" id="right" style="overflow-y:scroll">
          <el-breadcrumb>
            <el-breadcrumb-item
              v-for="(item,index) in $route.matched"
              :key="index"
            >{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      iconName: "el-icon-s-fold",
      iconBoolean: false,
      collapse: false,
      color1: "#409EFF"
    };
  },
  computed: {
    showRouters() {
      let homeRoutes = this.$store.state.routers
        .filter(r => r.path === "/home")[0]
        .children.filter(elem => elem.path!=='/profile');
      // console.log(homeRoutes);

      return homeRoutes.filter(route => {
        if (!route.path) {
          return false;
        } else if (route.path === "/login") {
          return false;
        } else {
          return true;
        }
      });
      return homeRoutes;
    },
    changeWidth() {
      if (this.collapse) {
        return "fit-content";
      } else {
        return "200px";
      }
    },
    changeHeight() {
      let winH = window.innerHeight;
      // console.log(winH);
      return winH + "px";
    },
    menuHeight() {
      let winH = window.innerHeight;
      // console.log(winH);
      return winH - 70 + "px";
    },
    route() {
      //设置default-active
      return this.$route.path;
    }
  },
  methods: {
    handleCommand(command) {
      if (command === "a") {
        this.$store.commit("setToken", null);
        window.sessionStorage.clear();
        this.$store.commit("backRole");
        this.$store.commit("backRouters");
        this.$router.push("/login");
      } else if (command === "b") {
        this.$router.push("/profile");
      }
    },
    changeIcon() {
      if (this.iconBoolean) {
        this.iconName = "el-icon-s-fold";
        this.iconBoolean = false;
        this.collapse = false;
      } else {
        this.iconName = "el-icon-s-unfold";
        this.iconBoolean = true;
        this.collapse = true;
      }
    }
  },
  mounted() {
    window.vue = this;
  }
};
</script>
<style scoped>
#smallicon {
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  width: 40px;
}
</style>