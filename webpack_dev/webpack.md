1.webpack是前端的一个项目构建工具,基于node.js 开发出来的一个前端工具

静态资源多的情况: 
..网页加载速度慢,因为要发起很多二次请求
..要处理错综复杂的依赖关系

解决方法webpack:合并代码/压缩代码/精灵图/图片的base64编码  并且解决各个包之间复杂的依赖关系

webpack使用方法:解决依赖关系
新建的工程项目中 npm init -y 初始化工程
浏览器不认识ES6中的语法,和require等语法,需要用webpack打包转化成浏览器认识的代码
webpack打包基本语法: webpack [需要打包的路径] [输出路径]