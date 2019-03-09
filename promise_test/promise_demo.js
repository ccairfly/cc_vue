
var fs = require("fs")

// 需求是读取完1成功后读取2然后再读取3,直接写回调,回调多了 会造成回调地狱
/*
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
*/

//promise对象创建成功后会立即调用里面函数的内容
//放在一个函数里面就不会立即调用了
function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        // console.log("这是一个promise函数");
        fs.readFile(fpath,"utf-8",function(err,data){
            //若有错误.则执行上报错误的回调
            if(err) return reject(err)
            //没有错误则执行正确的回调resolve
            resolve(data)
        })
    }) 
    return promise
}

//这是promise正确的使用方法
getFileByPath("./1.txt")
    .then(function success(data) {
        console.log("读取成功了"+data);
        return getFileByPath("./2.txt")
    },function err(errCode) {
        console.log("读取失败了"+errCode.message);
    })
    .then(function success(data) {
        console.log("读取成功了"+data);
        return getFileByPath("./3.txt")
    },function err(errCode) {
        console.log("读取失败了"+errCode.message);
    })
    .then(function success(data) {
        console.log("读取成功了"+data);
        // return getFileByPath("./3.txt")
    },function err(errCode) {
        console.log("读取失败了"+errCode.message);
    })




console.log("这里是程序的结尾");


