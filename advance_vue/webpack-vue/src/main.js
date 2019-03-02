//这是入口js 一般命名为main.js

import $ from "jquery"

//引入css文件直接import
import "./css/index.css"

import "bootstrap/dist/css/bootstrap.min.css"

import Vue from "vue"

var newtext = {
    template : "#newtext",
    data() {
        return {
            msg : "hello webpack vue --cc"
        }
    },
}

var vm = new Vue({
    el : "#app",
    data : {
    },
    methods : {

    },
    components : {
        newtext
    }

})
