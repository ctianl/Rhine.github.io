webpackJsonp([12],{Wm6b:function(t,e){},lO7g:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Home",data:function(){return{iconName:"el-icon-s-fold",iconBoolean:!1,collapse:!1,color1:"#409EFF"}},computed:{showRouters:function(){var t=this.$store.state.routers.filter(function(t){return"/home"===t.path})[0].children.filter(function(t){return"/profile"!==t.path});return t.filter(function(t){return!!t.path&&"/login"!==t.path})},changeWidth:function(){return this.collapse?"fit-content":"200px"},changeHeight:function(){return window.innerHeight+"px"},menuHeight:function(){return window.innerHeight-70+"px"},route:function(){return this.$route.path}},methods:{handleCommand:function(t){"a"===t?(this.$store.commit("setToken",null),window.sessionStorage.clear(),this.$store.commit("backRole"),this.$store.commit("backRouters"),this.$router.push("/login")):"b"===t&&this.$router.push("/profile")},changeIcon:function(){this.iconBoolean?(this.iconName="el-icon-s-fold",this.iconBoolean=!1,this.collapse=!1):(this.iconName="el-icon-s-unfold",this.iconBoolean=!0,this.collapse=!0)}},mounted:function(){window.vue=this}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-container",{style:{height:t.changeHeight}},[i("el-header",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center",height:"70px",position:"relative"},style:{background:t.$store.state.bgcolor}},[i("div",{attrs:{id:"smallicon"},on:{click:t.changeIcon}},[i("i",{class:t.iconName})]),t._v(" "),i("h1",[t._v("后台管理系统")]),t._v(" "),i("div",{staticStyle:{position:"absolute",right:"10px",display:"flex",width:"180px","font-size":"20px","flex-direction":"row","justify-content":"space-between","align-items":"center"}},[i("el-badge",{staticClass:"item",attrs:{"is-dot":t.$store.state.messageBadge}},[i("i",{staticClass:"el-icon-bell",on:{click:function(e){return t.$router.push("/tab")}}})]),t._v(" "),i("img",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:t.$store.getters.changeSrc}}),t._v(" "),i("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{"font-size":"20px"}},[t._v("\n            "+t._s(t.$store.state.roles[0])+"\n            "),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"b"}},[t._v("个人中心")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"a"}},[t._v("退出账户")])],1)],1)],1)]),t._v(" "),i("el-container",{style:{height:t.changeHeight,overflowX:"scroll"}},[i("el-aside",{staticStyle:{width:"fit-content","overflow-y":"hidden"}},[i("el-menu",{style:{width:t.changeWidth,height:t.menuHeight,fontWeight:"bold",overflowY:"hidden"},attrs:{mode:"verticle",collapse:t.collapse,"background-color":"#eeefef","text-color":"#666","active-text-color":t.$store.state.bgcolor,align:"left",router:"","collapse-transition":!1,"default-active":t.route}},[t._l(t.showRouters,function(e,n){return[e.children&&e.children.length?i("el-submenu",{key:n,attrs:{index:e.path}},[i("template",{slot:"title"},[i("i",{class:e.meta.icon}),t._v(" "),i("span",[t._v(t._s(e.meta.title))])]),t._v(" "),t._l(e.children,function(e,n){return[e.children&&e.children.length?i("el-submenu",{key:n,staticStyle:{"text-indent":"1.5em"},attrs:{index:e.path}},[i("template",{slot:"title"},[i("span",[t._v(t._s(e.meta.title))])]),t._v(" "),t._l(e.children,function(e,n){return i("el-menu-item",{key:n,attrs:{index:e.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])])})],2):i("el-menu-item",{key:n,attrs:{index:e.path}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])])]})],2):i("el-menu-item",{key:e.path,attrs:{index:e.path}},[i("i",{class:e.meta.icon}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.meta.title))])])]})],2)],1),t._v(" "),i("el-main",{staticStyle:{"overflow-y":"scroll"},attrs:{tag:"div",id:"right"}},[i("el-breadcrumb",t._l(t.$route.matched,function(e,n){return i("el-breadcrumb-item",{key:n},[t._v(t._s(e.meta.title))])}),1),t._v(" "),i("el-divider"),t._v(" "),i("keep-alive",[i("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(n,o,!1,function(t){i("Wm6b")},"data-v-4fcf97ba",null);e.default=l.exports}});
//# sourceMappingURL=12.526050b11f095a37d98a.js.map