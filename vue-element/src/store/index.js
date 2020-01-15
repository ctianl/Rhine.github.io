import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../network'

import { router, asyncRouterMap, constantRouterMap } from '../router'
Vue.use(Vuex)

function hasPermission(roles, route) {
    if (route.meta && route.meta.role) {
        return roles.some(role => route.meta.role.indexOf(role) >= 0)
    } else {
        return true
    }
}


let store = new Vuex.Store({
    state: {
        bgcolor:"rgba(119, 152, 187, 0.66)",
        token: "",
        roles: [],
        routers: constantRouterMap,
        addRouters: [],
        messageBadge:true
    },
    getters:{
        changeSrc(state) {
            if (state.roles[0] === "admin") {
                return "https://tvax4.sinaimg.cn/crop.0.0.996.996.180/0074HXD9ly8gaoj4s7bm8j30ro0roac8.jpg?KID=imgbed,tva&Expires=1578838255&ssig=HU9QjO0%2BIJ";
            }
            if (state.roles[0] === "editor") {
                return "https://wx2.sinaimg.cn/mw1024/0074HXD9gy1gadxbg0q2zj30460463yd.jpg";
            }
        }
    },
    mutations: {
        changeBgcolor(state,color){
            state.bgcolor=color
        },
        changeMessageBadge(state,boo){
            state.messageBadge=boo
        },
        setToken(state, token) {
            state.token = token
        },
        setRole(state, role) {
            state.roles.pop()
            state.roles.push(role)
        },
        backRole(state, role) {
            state.roles=[]
        },
        backRouters(state) {
            state.routers=constantRouterMap
        },
        changeRole(state, role) {
            state.roles.pop()
            state.roles.push(role)
        },

        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        LoadByUsername({ commit }, userForm) {
            return new Promise((resolve, reject) => {
                let username = userForm.username.trim()
                let password = userForm.password
                let data = {
                    username, password
                }
                axios({
                    //因为接口不能判断用户名，所以我创建了两个接口
                    url: '/news/gettoken',
                    method: "post",
                    data
                }).then(response => {
                    let res = response.data.data
                    commit('setToken', res.token)
                    window.sessionStorage.setItem('token', res.token)
                    router.push('/home')
                    resolve()
                }).catch(err => reject(err))
            })
        },
        getRole(context,tok) {
            //把独一无二的token信息打出去
            return new Promise((resolve, reject) => {
               
                if(tok==='adminToken'){
                    axios({
                        //尽管这里是发送了token信息，可是不知道为什么在mock中，token值为null，不能进行判断，所以我直接在这里进行判断
                        //Yinwei返回的都是false
                        url:"/news/adminrole",
                        method: "get",

                    }).then(response => {
                        let role = response.data.data.role
                        context.commit('setRole', role)
                        resolve(role)
                        // console.log(role)

                    }).catch(err => reject(err))
                } else if (tok === 'editorToken'){
                    axios({
                        //尽管这里是发送了token信息，可是不知道为什么在mock中，token值为null，不能进行判断，所以我直接在这里进行判断
                        //Yinwei返回的都是false
                        url:"/news/editorrole",
                        method: "get",

                    }).then(response => {
                        let role = response.data.data.role
                        context.commit('setRole', role)
                        resolve(role)
                        // console.log(role)

                    }).catch(err => reject(err))
                }


            })

        },

        GenerateRoutes({ commit }, data) {
            commit('setRole', data)
            return new Promise(resolve => {
                const roles = []
                roles.push(data)//roles=['admin']/['editor']
                const accessedRouters = asyncRouterMap.filter(v => {
                    if (roles.indexOf('admin') >= 0) return true;
                    if (hasPermission(roles, v)) {
                        if (v.children && v.children.length > 0) {
                            v.children = v.children.filter(child => {
                                if (hasPermission(roles, child)) {
                                    return child
                                }
                                return false;
                            });
                            return v
                        } else {
                            return v
                        }
                        
                    }
                    return false;
                });
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            })
        }
    },
})

export default store
