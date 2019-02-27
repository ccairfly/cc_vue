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