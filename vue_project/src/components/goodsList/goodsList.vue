<template>
    <div class="goods-list-box">
        <div class="goods-item" v-for="item in goodsData" :key="item.url" @click="gotoGoodsInfo(item.id,item.price_new)">
            <img 
            :src='item.url'
            alt="">
            <div>
                <h3 class="goods-title">{{ item.title }}</h3>
                <div class="goods-info">
                    <p class="price">
                        <span class="new">￥{{ item.price_new }}</span>
                        <span class="old">￥{{ item.price_old }}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余{{ item.remain }}件</span>
                    </p>
                </div>
            </div>
            
        </div>

        <mt-button type="danger" size="large" @click="getMore">点击加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return { 
            pageIndex : 1 , //分页的页数
            goodsData : [],
            goodsData_temp : []
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('http://127.0.0.1/getGoods?pageIndex=' + this.pageIndex).then(res=>{
                // console.log(res.body);
                this.goodsData_temp = res.body.goodsData
                res.body.goodslisturl.forEach((item,index) => {
                    this.goodsData_temp[index].url = item
                });
                this.goodsData_temp.forEach((item,index) => {
                    if((item.url !== '')&& (item.url != undefined)) {
                        this.goodsData.push(item)
                    }
                });
                // console.log(this.goodsData);
            },err=>{

            })
        },
        getMore(){
            if(this.pageIndex > 1)
                return 
            if(this.pageIndex == 1)
                this.pageIndex = 2
            this.getGoodsList()
        },
        gotoGoodsInfo(uid,uprice){
            this.$router.push({ name: 'goodsInfo', params: { id: uid , price: uprice}})
        },
    }
}
</script>

<style lang="scss">
.goods-list-box {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item {
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding: 2px;
        width: 49%;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            margin: 0px;
            width: 100%;
            height: 200px;
        }
        .goods-title {
            font-size: 14px;
        }
        .goods-info {
            background-color: #ddd;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .new {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 8px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
