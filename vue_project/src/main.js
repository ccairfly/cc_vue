//这是入口js 一般命名为main.js

//引入css文件直接import
import "./css/index.css"

// import "bootstrap/dist/css/bootstrap.min.css"

import Vue from "vue"

import App from "./App.vue"

//导入vuex
import Vuex from 'vuex'
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

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

var openShopCar = JSON.parse(localStorage.getItem("shopCar")||'[]') 

const store = new Vuex.Store({
    // state可以理解为组件中的data
    state: {
        // goodsCount: 0,
        // 用来存放购物车的商品
        // 数组中是商品对象{ id:商品id, goodsCounts:购买的商品数, goodsPrice:商品价格, isSelect:是否选择 }
        allShopCount : 0,
        goodsShopCar : openShopCar,
    },
    mutations: {
        pushToGoodsCar(state,goodsObj){
            var pushFlag = false
            state.allShopCount += goodsObj.goodsCounts

            state.goodsShopCar.some(item=>{
                if(item.id == goodsObj.id) {
                    pushFlag = true
                    item.goodsCounts += goodsObj.goodsCounts
                    return false 
                }
            })
            //找不到原来数组有数据,直接push
            if(pushFlag == false) {
                // console.log("数据不一样push");
                state.goodsShopCar.push(goodsObj)  
            } else {
                // console.log("数据一样");
            }
            localStorage.setItem("shopCar",JSON.stringify(state.goodsShopCar))
        },
        updateGoodsCarData(state,changeObj){
            state.goodsShopCar.some(item=>{
                if(item.id == changeObj.aid) {
                    item.goodsCounts = changeObj.goodsCounts
                    localStorage.setItem("shopCar",JSON.stringify(state.goodsShopCar))
                    return true 
                }
            })
        },
        updateGoodsSelect(state,changeObj){
            state.goodsShopCar.some(item=>{
                if(item.id == changeObj.aid) {
                    item.isSelect = changeObj.isSelect
                    localStorage.setItem("shopCar",JSON.stringify(state.goodsShopCar))
                    return true 
                }
            })
        },
        deleteGoodsCarData(state,did){
            state.goodsShopCar.some((item,index)=>{
                if(item.id == did) {
                    state.goodsShopCar.splice(index,1)
                    console.log('shanchu');
                    
                    return true 
                }
            })
        }
    },
    getters : {
        // 获取数据应该在getters中
        getAllCount(state){
            var count = 0
            state.goodsShopCar.forEach(item => {
                count += parseInt(item.goodsCounts) 
            });
            state.allShopCount = count 
            return state.allShopCount
        },
        getSelectCountAndSumPrice(state){
            var stateObj = {
                slectCounts : 0 ,
                sumPrice : 0
            }
            state.goodsShopCar.forEach(item=>{
                if(item.isSelect){
                    stateObj.slectCounts += parseInt(item.goodsCounts) 
                    stateObj.sumPrice += parseInt(item.goodsCounts) * parseInt(item.goodsPrice)
                }
            })
            return stateObj
        }
        // getGoodsCarDataFromLocalStorage(state){
        //     // console.log(JSON.parse(localStorage.getItem("shopCar")));
        //     state.goodsShopCar = JSON.parse(localStorage.getItem("shopCar")||'[]')  //没有则返回空数组
        //     state.goodsShopCar.forEach(item=>{
        //         state.allShopCount += item.goodsCounts
        //     })
        // },
    }
})

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
    store,
})
