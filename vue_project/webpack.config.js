const path = require("path")
//打开hot第二步:引webpack的包
const webpack = require("webpack")

//vue-loader在v15.x之后需要引入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
        // contentBase: path.join(__dirname, "src"),    //要使用node_modules里面的东西的时候要把contentBase设置为根目录
        port : 12345,
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
        }),
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module : {
        rules : [
            // 匹配以.css结尾的正则 用这两个loader来解析
            { test : /\.css$/, use : ["style-loader" , "css-loader"] },
            { test : /\.(jpg|png|bmp|gif|jpeg)$/, use : "url-loader?limit=8000&name=[hash:8]-[name].[ext]" },
            //解析处理字体文件
            { test : /\.(ttf|eot|svg|woff|woff2)$/, use : "url-loader" },
            { test : /\.js$/, use : "babel-loader" , exclude : /node_modules/},
            { test : /\.vue$/, use : "vue-loader"}
        ]
    },
    resolve : {
        // 使用普通渲染的方式需要使用别名vue打开全功能的vue
        // alias : {
        //     "vue$" : "vue/dist/vue.js"
        // }
    }
}