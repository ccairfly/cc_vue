//这是入口js 一般命名为main.js

//引入css文件直接import
import "./css/index.css"

// import "bootstrap/dist/css/bootstrap.min.css"

import Vue from "vue"

import App from "./App.vue"

//导入vue-router之后需要使用Vue.use创建出来
import VueRouter from "vue-router"
import router from "./js/router.js"

// 引入mui和mint-ui的样式
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"

import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

Vue.use(VueRouter)

var vm = new Vue({
    el : "#app",
    data : {
    },
    methods : {

    },
    // components : {
    // },
    //使用runtime-vue的时候只能使用render函数进行渲染
    render(createElements) {
        return createElements(App)   
    },
    router,
})
