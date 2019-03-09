
var fs = require("fs")

// 需求是读取完1成功后读取2然后再读取3,直接写回调,回调多了 会造成回调地狱
fs.readFile("./1.txt","utf-8",function(err,data){
    if(err){
        console.log("读取文件出错了" + err.message);
        return
    }
    console.log(data)
    fs.readFile("./2.txt","utf-8",function(err,data){
        if(err){
            console.log("读取文件出错了" + err.message);
            return
        }
        console.log(data)
        fs.readFile("./3.txt","utf-8",function(err,data){
            if(err){
                console.log("读取文件出错了" + err.message);
                return
            }
            console.log(data)
        });
    });
});




