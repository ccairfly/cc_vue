//这是入口js 一般命名为main.js

//引入css文件直接import
import "./css/index.css"

// import "bootstrap/dist/css/bootstrap.min.css"

import Vue from "vue"

import App from "./App.vue"

// 导入vue-resource
import VueResource from "vue-resource"
//导入vue-router之后需要使用Vue.use创建出来
import VueRouter from "vue-router"
import router from "./js/router.js"

// 引入mui和mint-ui的样式
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"
//导入图片预览插件
import VuePreview from 'vue-preview'

// Vue.use(VuePreview)

// with parameters install
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: true,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})

require('./mock/mockIndex')

// import { Header } from 'mint-ui';
// import { Button } from 'mint-ui';
// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Button.name, Button);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

import mintUI from 'mint-ui'
Vue.use(mintUI)
import 'mint-ui/lib/style.css'

Vue.use(VueRouter)
Vue.use(VueResource)

var vm = new Vue({
    el : "#app",
    data : {
    },
    methods : {

    },
    // components : {
    // },
    //使用runtime-vue的时候只能使用render函数进行渲染
    render(createElements) {
        return createElements(App)   
    },
    router,
})
