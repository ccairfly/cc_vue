//这是入口js 一般命名为main.js

import $ from "jquery"

$(function(){
    $("li:odd").css("backgroundColor","green")
    $("li:even").css("backgroundColor",function(){
        return "#" + "696969"
    })
})
