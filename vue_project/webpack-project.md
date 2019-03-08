1.新建一个webpack-vue模板项目,安装所需要的包 npm i
2.项目界面---头部---中间组件内容---底部Tabbar
3.头部开始找到mint-ui有现成的代码段main.js中引入
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
在页面中引入即可<mt-header fixed title="cc vue project"></mt-header>
4.底部Tab-bar是使用了mui,github下载mui_master代码段
直接查找mui的源代码和样式放入lib文件夹中即可使用,与bootstrap类似
5.tabBar图标可以去mui中的example icon中寻找,还有extra icon需要额外导入css和ttf
6.使用router-link替换a标签 router中可以定义linkActiveClass,active类
7.使用mint-ui轮播图组件,swipe
8.使用vue-resource发送请求 安装vue-resource开发依赖 npm i vue-resource -S
引包和使用 
this.$http.get('/url地址').then(response => {
	console.log(response.body);
}, response => {
	// error callback
});

9.使用vue-resource加载首页轮播图数据存放在list中
使用get请求获取数据,将得到的图片url数据渲染到img标签中v-for="item in list" :key="item.url"(在组件中使用v-for必须要传入一个key,这个key使用的是数组中的url)

