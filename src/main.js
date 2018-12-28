// 入口文件

import Vue from "vue"

// 导入MUI 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 按需导入 mint-ui 组件
import { Header } from "mint-ui"
Vue.component(Header.name, Header);

import router from './router.js'

import app from "./App.vue"

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router // 挂载路由
})