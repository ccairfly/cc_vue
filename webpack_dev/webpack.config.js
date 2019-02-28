const path = require("path")
//打开hot第二步:引webpack的包
const webpack = require("webpack")

//引包使用html-webpack-plugin插件
const htmlWebpackPlugin = require("html-webpack-plugin")

//这个配置文件 其实就是一个JS文件,通过node 中的模块操作向外暴露了一个配置对象
module.exports = {
    entry : path.join(__dirname,"./src/main.js"),
    output : {
        path : path.join(__dirname,"./dist"),
        filename : "bundle.js"
    },
    // 方式2:在devServer中配置
    devServer : {
        open : true,
        contentBase: path.join(__dirname, "src"),
        port : 9000,
        hot : true,  //打开hot第一步勾选true
    },
    plugins : [
        //打开hot第三步:new热启动插件
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //new 一个html-webpack-plugin插件的配置对象
        new htmlWebpackPlugin({
            template : path.join(__dirname,"./src/index.html"),
            filename : "index.html"
        })
    ]
}