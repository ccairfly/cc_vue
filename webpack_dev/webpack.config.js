const path = require("path")
//这个配置文件 其实就是一个JS文件,通过node 中的模块操作向外暴露了一个配置对象
module.exports = {
    entry : path.join(__dirname,"./src/main.js"),
    output : {
        path : path.join(__dirname,"./dist"),
        filename : "bundle.js"
    }
}