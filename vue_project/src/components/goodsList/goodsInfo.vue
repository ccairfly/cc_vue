<template>
    <div class="goods-container">
        <transition
        @before-enter="ballBeforeEnter"
        @enter="ballEnter"
        @after-enter="ballAfterEnter"
        >
            <div class="goodsball" v-show="ballVisible" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <thumbImg :swipeData="thumbImg"></thumbImg>
                    </div>
                </div>
		</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ infoData.title }}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div>
                            <span class="price_old">市场价 : <del>¥9999</del></span>&nbsp;&nbsp;&nbsp;<span>现价 : <span class="price_new">¥{{ infoData.price_now }}</span></span>
                        </div>

                        <goodsNumBox @sendNum="getGoodsCount" :maxCount="infoData.click"></goodsNumBox>

                        <div>
                            <mt-button type="danger" size="small" @click="addToShopCart">加入购物车</mt-button>&nbsp;&nbsp;&nbsp;
                            <mt-button type="primary" size="small">立即购买</mt-button>
                        </div>
                        
                    </div>
                </div>
		</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="goods-params-text">
                            <p>
                                商品货号 : {{ infoData.guid }}
                            </p>
                            <p>
                                库存情况 : 剩余{{ infoData.click }}件
                            </p>
                            <p>
                                上架时间 : {{ infoData.add_time }}
                            </p>
                        </div>
                    </div>
                </div>
            <div class="mui-card-footer">
                <div class="bottom-btn">
                    <mt-button type="danger" size="large" @click="gotoGoodsDesc(id)">查看详情</mt-button>
                    <mt-button type="primary" size="large" @click="gotoGoodsComment(id)">商品评论</mt-button>
                </div>
                
            </div>
		</div>
    </div>
</template>

<script>
import thumbImg from '../subcomponent/thumbImg.vue'
import goodsNumBox from './goodsNumBox.vue'
export default {
    data() {
        return {
            id : this.$route.params.id,
            thumbImg : [],
            infoData : {},
            ballVisible : false,
            shopCartLock : false,
            goodsCount : 1,
        }
    },
    created() {
        this.getGoodsInfoImg()
    },
    
    components : {
        thumbImg,
        goodsNumBox,
    },
    methods : {
        getGoodsInfoImg() {
            this.$http.get('http://127.0.0.1/getGoodsInfoImg/' + this.id).then(res=>{
                this.infoData = res.body
                this.thumbImg = res.body.imgurl
            },err=>{

            })
        },
        gotoGoodsDesc(gid) {
            this.$router.push({ name: 'goodsDesc', params: { gid }})
        },
        gotoGoodsComment(gid) {
            this.$router.push({ name: 'goodsComment', params: { gid }})
        },
        addToShopCart(){
            if(this.shopCartLock == true)
                return 
            this.ballVisible = true
            this.shopCartLock = true
        },
        ballBeforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        ballEnter(el,done){
            const ballPosition = this.$refs.ball.getBoundingClientRect()
            const badgePosition = document.getElementById("shopCartBadge").getBoundingClientRect()
            const transformTop = badgePosition.top - ballPosition.top            
            const transformLeft = badgePosition.left - ballPosition.left
            el.offsetWidth;
            el.style.transform = `translate(${transformLeft}px,${transformTop}px)`
            el.style.transition = "all 0.5s cubic-bezier(.29,-0.2,1,.67)"
            done() 
        },
        ballAfterEnter(el){
            this.ballVisible = false 
            this.shopCartLock = false          
        },
        getGoodsCount(count){
            // console.log("这是父组件的方法,子组件传递给父组件的值是:" + count);
            this.goodsCount = count
        },
    }
}
</script>

<style lang="scss">
.goods-container {
    // position: relative;
    background-color: #eee;
    .price_new {
        font-weight: bold;
        color: red;
    }
    .mui-card-footer {
        display: block;
        button {
            margin: 10px 0;
        }
    }
    .goodsball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 100;
        top:440px;
        left: 148px;
    }   
}
</style>
