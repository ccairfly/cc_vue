//这是入口js 一般命名为main.js

import $ from "jquery"

//引入css文件直接import
import "./css/index.css"

import "bootstrap/dist/css/bootstrap.min.css"


$(function(){
    $("li:odd").css("backgroundColor","greenyellow")
    $("li:even").css("backgroundColor",function(){
        return "#" + "33445566"
    })
})

console.log("ok cc let go");

class Persion {
    static info = { "name" : "张三" , "age" : 19 }
}

console.log("this is " + Persion.info );

