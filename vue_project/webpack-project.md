
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

10.首页新闻资讯a标签改造成router-link路由,新增路由组件newlist
*新闻资讯页面布局制作,使用MUI中的media-list
*使用vue-resource获取新闻资讯数据并渲
*获取到的数据存储在程序内部的list[]中,使用v-for将拿到的数据一起渲染页面

11.新闻详情页面的制作:
*将资讯列表的路由改造成router-link,传入ID参数/url/xx 
*路由匹配规则创建的时候匹配ID,匹配规则可以使用/:id,后面可以使用$route来接收router传递过来的参数
*使用$route.params接收使用:xx 传递来的参数  使用$route.query接收使用?xx传递来的参数

12.获取并渲染新闻详情页面

13.内容评论组件
*新建comment组件,基本样式的制作,并显示在父组件中,父组件若要使用子组件,需要导入子组件,然后挂载在components对象中,挂载后使用标签使用子组件
*发起网页请求后台数据,,点击加载更多之后传入的参数pageIndex++然后调用getcomment方法 comment方法中发起请求的pageIndex参数发生变化
*为了防止数据被覆盖,点击加载更多之后应该不覆盖掉之前的数据应该使用contact方法拼接以前的数据this.comment = this.comment.contact(data.body.data.message)

