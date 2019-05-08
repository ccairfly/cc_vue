<template>
    <div class="shopcar-container">
        <!-- 商品列表区 -->
        <div class="goods-list">
            <!-- <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch v-model="isOpen"></mt-switch>
                        <img src='https://gw.alicdn.com/bao/uploaded/i3/2114928378/O1CN012BlAi8h1ZmOqytd_!!2114928378.jpg'>
                        <div class="shopinfo">
                            <h3>标题,小米手机劲爆价格不要999,不要888,只要88.8</h3>
                            <div class="shop-price">
                                <span class="price">单价:88.8</span>
                                <shopnumbox></shopnumbox>
                                <a href="#">删除</a>
                            </div>
                        </div>
                    </div>
				</div>
		    </div> -->
            <div class="mui-card" v-if="isCarNull">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        你的购物车空空如也
                    </div>
                </div>
            </div>
            <div class="mui-card" v-for="(item,index) in shopCarList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch v-model="item.isSelect" @change="selectChange(item.id,index)"></mt-switch>
                        <img :src='item.url'>
                        <div class="shopinfo">
                            <h3>{{ item.title }}</h3>
                            <div class="shop-price">
                                <span class="price">单价:{{ item.goodsPrice }}</span>
                                <shopnumbox :count="item.goodsCounts" :gid="item.id"></shopnumbox>
                                <a href="#" @click.prevent="deleteHandler(index,item.id)">删除</a>
                            </div>
                        </div>
                    </div>
				</div>
		    </div>
        </div>
        
        <!-- 商品结算区域 -->
        <div class="goods-settlement">
            <div class="mui-card">
				<div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="sum">
                            <div class="sum-text">
                                <p>总计(不含运费):</p>
                                <p>已勾选商品 <span class="sum-num">0</span> 件 , 总价 <span class="sum-num">￥0</span> </p>
                            </div> 
                            <mt-button type="danger" size="small">去结算</mt-button>
                        </div>
                    </div>
				</div>
		    </div>
        </div>
    </div>
</template>

<script>
import shopnumbox from './subcomponent/shopNumBox.vue'
export default {
    data(){
        return {
            isCarNull : false,
            isOpen : false,
            shopCarList : [],
            shopData : [],
            shopDataTemp : [],
        }
    },
    created(){
        this.getShopCarData(this.successHandler)
        // this.updateShopCar()
    },
    methods : {
        updateShopCar(){
            var shopDataTem2 = JSON.parse(localStorage.getItem("shopCar")) 
            // console.log(shopDataTem2.length);
            this.shopCarList = shopDataTem2
            if(shopDataTem2 == null || shopDataTem2.length === 0) {
                this.isCarNull = true 
            }
            else {
                this.isCarNull = false
                this.shopCarList.forEach(item=>{
                    item.url = this.shopData[item.id].url
                    item.title = this.shopData[item.id].title
                })
            }
        },
        getShopCarData(done){
            this.$http.get('http://127.0.0.1/getGoods?pageIndex=' + 1).then(res=>{
                this.shopDataTemp = res.body.goodsData
                res.body.goodslisturl.forEach((item,index) => {
                    this.shopDataTemp[index].url = item
                });
                this.shopDataTemp.forEach((item,index) => {
                    if((item.url !== '')&& (item.url != undefined)) {
                        this.shopData.push(item)
                    }
                });
                done()
            },err=>{
                this.updateShopCar()
            })
        },
        successHandler() {
            this.$http.get('http://127.0.0.1/getGoods?pageIndex=' + 2).then(res=>{
                this.shopDataTemp.splice(0,this.shopDataTemp.length)

                this.shopDataTemp = res.body.goodsData
                res.body.goodslisturl.forEach((item,index) => {
                    this.shopDataTemp[index].url = item
                });
                this.shopDataTemp.forEach((item,index) => {
                    if((item.url !== '')&& (item.url != undefined)) {
                        this.shopData.push(item)
                    }
                });
                this.updateShopCar()
            },err=>{
                this.updateShopCar()
            })
        },
        deleteHandler(ind,del_id){
            var storageData = JSON.parse(localStorage.getItem("shopCar"))
            storageData.splice(ind,1)
            localStorage.setItem("shopCar",JSON.stringify(storageData))
            this.updateShopCar()
            this.$store.commit('deleteGoodsCarData',del_id)
        },
        selectChange(sid,ind){
            var selectObj = {
                aid : sid,
                isSelect : this.shopCarList[ind].isSelect
            }
            this.$store.commit('updateGoodsSelect',selectObj)
        }
    },
    components : {
        shopnumbox,
    }
}
</script>


<style lang="scss">
.shopcar-container {
    background-color: #eee;
    overflow: hidden;
    .mui-card-content-inner {
        display: flex;
        align-items: center;
    }
    .goods-list {
        img{
            height: 60px;
            width: 60px;
        }
        h3 {
            font-size: 14px;
        }
        .shopinfo {
            .shop-price {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .price {
                color: red;
                font-size: 12px;
                font-weight: bold;
            }
        }
    }
    .goods-settlement {
        .sum {
            width: 100%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            .sum-num {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }
}
</style>