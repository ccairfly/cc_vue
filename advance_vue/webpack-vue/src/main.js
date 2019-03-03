//这是入口js 一般命名为main.js

import $ from "jquery"

//引入css文件直接import
import "./css/index.css"

import "bootstrap/dist/css/bootstrap.min.css"

import Vue from "vue"

import newtext from "./text.vue"

//导入vue-router之后需要使用Vue.use创建出来
import VueRouter from "vue-router"
import router from "./js/router.js"


Vue.use(VueRouter)



var vm = new Vue({
    el : "#app",
    data : {
    },
    methods : {

    },
    components : {
        newtext
    },
    //使用runtime-vue的时候只能使用render函数进行渲染
    render(createElements) {
        // console.log(newtext);
        return createElements(newtext)   
    },
    router,
})
