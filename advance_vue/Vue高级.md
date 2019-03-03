1.render方法的使用
render(createElements) {
    return createElements(text)
}

在vue实例外面定义:
<template id=text>
...
</template>

var text = {
	template : "#text",
	data : function(){
		return {
		msg : "hello cc"
		}
	}
}
text为需要渲染的对象,render会把vue实例替换成渲染成模板(替换)


2. webpack中导入vue和script标签引入的区别:
*整体项目依赖中安装vue : npm i vue -S
*入口js中导包 import Vue from "vue"
*注意导入的"vue"与script引入的不一样..需要import全功能的vue包
*在webpack.config.js中resolve配置别名
resolve : {
	alias : {
		"vue$" : "vue/dist/vue.js"
	}
}

3.结合webpack和vue(重点)
*入口js中导入vue组件,这里是text.vue
*webpack默认不支持打包.vue,需要安装第三方loader进入开发依赖 npm i vue-loader vue-template-compiler -D 
*webpack配置{ test : /\.vue$/, use : "vue-loader"} 使用vue-loader解析.vue
*Vue-loader在15.x之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
在webpack.config中引用 const VueLoaderPlugin = require('vue-loader/lib/plugin')
plugins中new VueLoaderPlugin()

4.export default 和 export导出
export default 只能导出一个,export 是按需导出,可以导出多个,外面只能用{}来接收,名称要一样
每个.vue中需要export default 导出一个模板对象以便用于控制
注意:使用了export default导出模板对象之后 {{ msg }} 插值表达式才不会报错

5.webpack-vue中使用vue-router
*安装vue-router进入项目依赖npm i vue-router -S
*导入包并手动安装import vueRouter from "vue-router"之后Vue.use(vueRouter)
*创建路由对象并引入组件模板
var router = new VueRouter({
	routes : [
		{path : "./xxx" , component : xxx},
		{path : "./xxx2" , component : xxx2}
	]
})
*在实例上挂载路由使用router-view和router-link






















