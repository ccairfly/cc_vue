1.webpack是前端的一个项目构建工具,基于node.js 开发出来的一个前端工具

静态资源多的情况: 
..网页加载速度慢,因为要发起很多二次请求
..要处理错综复杂的依赖关系

解决方法webpack:合并代码/压缩代码/精灵图/图片的base64编码  并且解决各个包之间复杂的依赖关系

webpack使用方法:解决依赖关系
新建的工程项目中 npm init -y 初始化工程
安装jquery: npm i jquery -S

浏览器不认识ES6中的语法,和require等语法,需要用webpack打包转化成浏览器认识的代码

2.webpack打包基本语法: webpack [需要打包的路径] -o [输出路径]

3.webpack最基本的配置文件的使用:在项目根目录中新建webpack.config.js文件

4.使用webpack-dev-server这个工具,实现自动打包编译功能
npm i webpack-dev-server -D把这个工具安装到项目本地依赖
提示安装npm i webpack-cli -D把这个工具安装到项目本地依赖

在package.json中可以定义自定义的工程命令"scripts"对象中添加
"dev": "webpack-dev-server"
命令输入npm run dev 启动webpack-dev-server
使用dev-server时候bundle.js会生成在项目根目录(重要)

5.html-webpack-plugin插件:
*自动在内存中根据指定页面生成一个内存地址
*自动把打包好的bundle.js追加到页面中去,开发者不需要记住bundle.js的地址
在项目中安装插件npm i html-webpack-plugin -D
在webpack.config.js中引包 const webpack = require("webpack")
在plugins对象中new出对象并配置对象中包含入口和文件名称
new htmlWebpackPlugin({
	template : path.join(__dirname,"./src/index.html"),
	filename : "index.html"
})

6.第三方loader:
webpack 默认只能打包处理JS类型的文件,无法处理其他类型的文件,需要安装合适的第三方loader加载器
打包CSS文件:
*安装style-loader 和 css-loader 进项目开发依赖 npm i style-loader css-loader -D
*js入口中引入css文件,直接ipmort "路径" ------------import "./css/index.css"
*在webpack.config中配置module对象节点中的rules匹配正则对象
module : {
	rules : [
		// 匹配以.css结尾的正则 用这两个loader来解析
		{ test : /\.css$/, use : ["style-loader" , "css-loader"] }
	]
}

url-loader:(内部依赖file-loader)加入到项目开发依赖 npm i url-loader file-loader -D 
正则匹配规则+传递参数:{ test : /\.(jpg|png|bmp|gif|jpeg)$/, use : "url-loader?limit=8000&name=[hash:8]-[name].[ext]" }
url-loader还可以处理字体文件
{ test : /\.(ttf|eot|svg|woff|woff2)$/, use : "url-loader" }
注意npm 安装bootstrap到项目依赖的时候应该带上版本号3.3.7 npm i bootstrap@3.3.7 -S
