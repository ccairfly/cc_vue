//这是入口js 一般命名为main.js

import $ from "jquery"

//引入css文件直接import
import "./css/index.css"

$(function(){
    $("li:odd").css("backgroundColor","greenyellow")
    $("li:even").css("backgroundColor",function(){
        return "#" + "33445566"
    })
})
