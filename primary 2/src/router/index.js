import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

let Login = () => import('@/components/Login')
let Home = () => import('@/components/Home')

let SystemHome = () => import('@/components/SystemHome')
let BasicTable = () => import('@/components/BasicTable')
let Tab = () => import('@/components/Tab')
let RelevantInput = () => import('@/components/RelevantInput')
let BasicInput = () => import('@/components/BasicInput')
let ThirdMenu = () => import('@/components/ThirdMenu')
let Editor = () => import('../components/Editor/Editor.vue')
let MarkDown = () => import('@/components/MarkDown')
let Echart = () => import('@/components/Echart')
let Drag = () => import('@/components/Drag')
let DragTable = () => import('@/components/DragTable')
let DragBox = () => import('@/components/DragBox')
let Language = () => import('@/components/Language')
let ChangeColor = () => import('@/components/ChangeColor')
let Profile = () => import('@/components/Profile')


let Lint = () => import('@/components/Lint')
let Icon = () => import('@/components/Icon')


Vue.use(Router)

let constantRouterMap = [
    {
        path: "",
        redirect: "/login"
    },

    {
        path: "/login",
        name: "Login",
        component: Login
    },
]

let router = new Router({
    mode: "history",
    routes: constantRouterMap
})

let asyncRouterMap = [
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            role: ['admin', 'editor'],
            icon: "el-icon-delete",
            title: "后台管理系统"
        },
        children: [


            {
                path: "/home",
                name: "SystemHome",
                component: SystemHome,
                meta: {
                    role: ['admin', 'editor'],
                    icon: "el-icon-s-home",
                    title: "系统首页"
                }
            },
            {
                path: "/icon",
                name: "Icon",
                component: Icon,
                meta: {
                    role: ['admin', 'editor'],
                    icon: "el-icon-view",
                    title: "Icon图标"
                }
            },
            {
                path: "/profile",
                name: "Profile",
                component: Profile,
                meta: {
                    role: ['admin', 'editor'],
                    icon: "el-icon-user",
                    title: "个人中心"
                }
            },
            {
                path: "/tab",
                name: "Tab",
                component: Tab,
                meta: {
                    role: ['admin', 'editor'], icon: "el-icon-s-order",
                    title: "Tab选项卡"
                },
            },

            {
                //大家都可以进入用户界面，只是admin和edtior的导航会不一样
                path: "/input",
                name: "RelevantInput",
                component: RelevantInput,
                meta: {
                    role: ['admin', 'editor'], icon: "el-icon-tickets",
                    title: "表单相关"
                },
                children: [
                    {
                        path: "/basicinput",
                        name: "BasicInput",
                        component: BasicInput,
                        meta: {
                            role: ['admin', 'editor'],
                            title: "基本表单"
                        },
                    },
                    {
                        path: "/thirdmenu",
                        name: 'ThirdMenu',
                        component: ThirdMenu,
                        meta: {
                            role: ['admin', 'editor'],
                            title: "三级菜单"
                        },
                        children: [
                            {
                                path: "/editor",
                                name: "Editor",
                                component: Editor,
                                meta: {
                                    role: ['admin', 'editor'], icon: "",
                                    title: "富文本编辑器"
                                },
                            },
                            {
                                path: "/markdown",
                                name: "MarkDown",
                                component: MarkDown,
                                meta: {
                                    role: ['admin', 'editor'], icon: "",
                                    title: "Mark Down编辑器"

                                },
                            }
                        ]
                    }
                ]

            },
            {
                path: "/echart",
                name: "Echart",
                component: Echart,
                meta: {
                    role: ['admin'], icon: "el-icon-pie-chart",
                    title: "Echart图表"

                },
            },
            {
                path: "/drag",
                name: "Drag",
                component: Drag,
                meta: {
                    role: ['admin', 'editor'], icon: "el-icon-s-data",
                    title: "表格展示"

                },
                children: [
                    {
                        path: "/basictable",
                        name: "BasicTable",
                        component: BasicTable,
                        meta: {
                            role: ['admin', 'editor'],
                            icon: "el-icon-menu",
                            title: "基本表格"
                        }
                    },
                    {
                        path: "/DragTable",
                        name: "DragTable",
                        component: DragTable,
                        meta: {
                            role: ['admin', 'editor'], icon: "",
                            title: "拖拽表格"

                        },
                    },
                    {
                        path: "/dragbox",
                        name: "DragBox",
                        component: DragBox,
                        meta: {
                            role: ['admin', 'editor'], icon: "",
                            title: "动态表格"

                        },
                    },
                ]
            },
            {
                path: "/language",
                name: "Language",
                component: Language,
                meta: {
                    role: ['admin', 'editor'], icon: "el-icon-coordinate",
                    title: "国际化功能"
                },
            },
            {
                path: "/changecolor",
                name: "ChangeColor",
                component: ChangeColor,
                meta: {
                    role: ['admin', 'editor'], icon: "el-icon-orange",
                    title: "个性换肤"
                },
            },
            {
                path: "/lint",
                name: "Lint",
                component: Lint,
                meta: {
                    role: ['admin'], icon: "el-icon-s-custom",
                    title: "权限测试"

                },

            }
        ]
    },
];


router.beforeEach((to, from, next) => {
    //结合本地 储存账户信息
    if (window.sessionStorage.getItem('token')) {
        store.commit('setToken', window.sessionStorage.getItem('token'))
    }
    if (store.state.token) { // 判断是否有token
        if (to.path === '/login') {
            next({ path: '/home' });
        } else {
            if (store.state.roles.length === 0) {

                store.dispatch('getRole', store.state.token).then(res => { // 拉取info
                    const role = res;//admin/editor
                    store.dispatch('GenerateRoutes', role).then(() => { // 生成可访问的路由表
                        router.addRoutes(store.state.addRouters) // 动态添加可访问路由表
                        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record

                    })
                }).catch(err => {
                    console.log(err);
                });

            } else {
                next()
                document.title = to.matched[1].meta.title

            }




        }
    } else {
        //最后这么写
        if (to.path === '/login') {
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
        }
    }
});

export { router, asyncRouterMap, constantRouterMap }