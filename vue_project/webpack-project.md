
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

14.##发表评论
*文本框做双向数据绑定,发表按钮做点击绑定时间
*校验评论是否为空,如果为空则弹出Toast提示
*通过vue-resource通过post请求把数据发送到服务器保存
*当发表评论ok之后,重新刷新页面,以便显示查看最新评论(可以调用getComment方法实现) ---一般本地将内容直接unshift进入数组第一个内容显示出来就好了

15.图片分享组件:
*制作顶部滑动tabbar,注意:借助于MUI中的tab-top-webview-main 并需要把slider区域的mui-fullscreen类去掉(不需要全屏)
*使用scroll区域滚动组件:导入MUI js文件,导入时候报错strict mode会报错,把webpack配置中启用严格模式禁用.import mui from "./xxxx"
*需要使用 babel 插件:安装 npm i babel-plugin-transform-remove-strict-mode ...在.babelrc文件中添加"plugins": ["transform-remove-strict-mode"]
*在chrome为了提高页面的流程度,滑动的时候会出现报警 在style标签里面添加 *{ touch-action: pan-y; },用于某个特定区域是否开放给用户操作(比如浏览器滑动,缩放等)
*刚进入页面不能滑动的问题,使用生命周期钩子函数,mounted:当组件中的DOM结构渲染好了之后,再执行滑动空间的初始化,
操作DOM元素的时候要在mounted钩子函数中操作
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
*当滑动条调试好之后发现APP.vue中的tabbar无法正常工作,发现是新加入的mui scroll样式冲突,需要重新改一下样式名称mui-tab-item

16.获取图片数据实现图片懒加载效果,mint-ui提供现成的组件"lazy-load" 将懒加载的代码和样式复制到工程当中(中间小圈圈的样式)
*lazy-load与vue冲突所以在使用lazy-load的时候只能全局引入mint-ui 和munt-ui的样式
*获取图片数据渲染图片列表数据(每张图片高300的情况下) 圈圈默认在最左边,父盒子添加text-align: center;
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
*渲染图片列表使用的是v-lazy指令
<ul>
	<li v-for="item in imgdatalist" :key="item.id">
		<img v-lazy="item">
	</li>
</ul>

17.图片详情页面的制作:
改造路由的时候需要修改tag,否则样式变了 router.js中修改匹配的规则/xxx/?id
id: this.$route.params.id ////从url的信息中获取id
mock图片详情的数据并显示在页面上
*mockjs中拦截带参数的url,在mock中填入的rurl可以填入正则表达式
/\/goods\/\d+/ 使用正则表达式的时候不需要加入引号
表示/goods/xx xx处为一个或者多个数字

18.图片详情页面样式的美化
左右布局,使用最多的盒子模型,
display: flex;
justify-content:space-between;
*评论子组件的加入
import comment from '/xxx.vue'
注册子组件 :components节点中增加
在页面中标签的方式引用子组件

19.缩略图的制作vue-preview
安装项目运行依赖包npm i vue-preview -S
main.js中导入包
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
src msrc w 和 h 属性必须要有

20.商品列表页面基本结构
*首先:安装对scss的支持:安装node-sass和sass-loader -S
在webpack.config中添加处理scss的loader { test : /\.scss$/, use : [{loader:"style-loader"},{loader:"css-loader"},{loader:"sass-loader"}] }
*制作商品列表 : 经典两列布局,使用flex布局,flex-wrap,在必要的时候拆行
display: flex;
flex-wrap: wrap;
justify-content: space-between;
*完成商品列表样式的制作,主要理解css3中的流式布局

21.安卓真机调试 预览项目
*手机与开发电脑处于同一网络环境中
*在package.json文件中在dev脚本中添加 --host指令,设置当前电脑的IP地址

22.商品列表界面数据的mock和渲染掌握数组方法push和contact,push是添加,contact是合并数组

23.编程式导航
在网页中有两种跳转方式:
方式1:使用a标签的跳转方法
方法2:使用window.location.href的形式实现编程式导航
使用编程式导航需要区分this.$route和this.$router
*掌握this.$router.push()  this.$router.go() this.$router.forward() this.$router.back()方法
*商品列表点击进入商品详情页面使用编程式导航制作

24.卡片视图布局
使用MUI的卡片视图cardview card
页眉 信息体 页脚
*抽离轮播图组件	封装组件内部使用props["xxxx"] , 即可使用xxx渲染数据,父组件在使用封装好的组件的时候需要传入xxx数据
使用封装好的组件三步走: 引包import , 将组件挂载进components节点中, 在父组件中使用标签的方式使用
需要传入的值做成一个属性 props["xxx"] 父组件中 绑定该属性,并向其传递值 :xxx="aaa"

25.商品详情页面的制作
使用MUI 中的数字输入框完成,导入import mui from "../../../lib/mui/js/mui.min.js"js包
在mounted的时候初始化数字输入组件mui("mui-numbox").numbox()
mui-card-footer和header默认为flex布局,按钮都在同一行,需要display:block

26.商品详情页面实现编程式导航跳转
将商品详情页面的详情介绍和商品评论作为编程式导航跳转
完成商品详情页面的渲染和评论页面组件的存放

27.实现购物车小球和小球动画
*小球位移,将ball的div使用transition包起来,定义三个动画钩子函数@before-enter @enter @after-enter
*将三个钩子函数的实现放在methods中
*不同分辨率和移动的时候小球的位移:动态获取位移到的位置的值
*获取小球在页面中的位置 ref 加在普通的元素上，用this.$refs.name 获取到的是dom元素
*getBoundingClientRect用于获取某个元素相对于视窗的位置集合
const ballPosition = this.$refs.ball.getBoundingClientRect()
// console.log(ballPosition);
const badgePosition = document.getElementById("shopCartBadge").getBoundingClientRect()
const transformTop = badgePosition.top - ballPosition.top            
const transformLeft = badgePosition.left - ballPosition.left
el.offsetWidth;
el.style.transform = `translate(${transformLeft}px,${transformTop}px)`
el.style.transition = "all 1s cubic-bezier(.29,-0.2,1,.67)"

28.子组件向父组件传值,传购买数量
事件调用机制:父组件向子组件传递一个方法,子组件调用这个方法,并把数据作为参数 传递给父组件
父组件在子组件中绑定事件:@sendNum="getGoodsCount
父组件方法:getGoodsCount(count){
console.log("这是父组件的方法,子组件传递给父组件的值是:" + count);
},
子组件通过this.$emit,调用方法,然后把值传递:
this.$emit("sendNum",this.value)

29.父组件向子组件传递数据,在子组件中定义props:["xxx"],
父组件引用时候绑定属性的值,:xxx="123" , 则在子组件xxx中可以获取到数据123
使用JS API语法设置numbox的最大值,
mounted的时候还没能拿到max值,所以只能使用watch监听max值,当max有新值时候使用API语法重新设置max值

30.其他组件间传值:vuex引入
goodsinfo拿到传递来的值的时候加入购物车
*安装vuex三部曲--> 项目依赖: npm i vuex -S 引入:import Vuex from 'vuex' 使用:Vue.use(Vuex)
*简单使用vuex , 将store数据显示到组件中:
显示创建数据存储对象 全局store仓库
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
        state.count++
        }
    }
})
state可以理解为组件中的data,专门用来存储数据
*将vuex创建的store挂载到VM实例上 store:store,-->可以简写store,只要挂载到VM上,任何组件都可以使用$store来存取数据
mutations里面存放着方法,可以理解为仓库管理员,需要操作仓库的数据则使用this.$store.commit("方法名")来操作仓库中store数据
commit提交mutation最多只支持两个参数,参数1是state状态,参数2是通过commit提交来的参数
*需要注意浅拷贝与深拷贝

31.vuex的数据实现本地存储
*在点击购物车的时候就把数据存储到本地localStorage--H5新特性IE8以上才可以使用,永久性存储,字符串的读取
localStorage.setItem , localStorage.removeItem , localStorage.clear
JSON.stringify(xxx) -->将xxx对象字符串化
JSON.parse(xxx)	-->将xxx字符串转化成对象
本地存储可以在application中Local Storage查看
getters相当于获取器

32.把dist目录删除,在命令行使用webpack打包,在dist中得到index.html和bundle.js,托管到apache服务器中打开
