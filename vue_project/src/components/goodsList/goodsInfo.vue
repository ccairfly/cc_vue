<template>
    <div class="goods-container">
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
                        
                        <div class="num-box">
                            <span>购买数量 : </span> 
                            <span>
                                <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='10'>
                                    <!-- "-"按钮，点击可减小当前数值 -->
                                    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                                    <input class="mui-numbox-input" type="number" value="1"/>
                                    <!-- "+"按钮，点击可增大当前数值 -->
                                    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                                </div>
                            </span>
                        </div>

                        <div>
                            <mt-button type="danger" size="small">加入购物车</mt-button>&nbsp;&nbsp;&nbsp;
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
                    <mt-button type="danger" size="large">查看详情</mt-button>
                    <mt-button type="primary" size="large">商品评论</mt-button>
                </div>
                
            </div>
		</div>
    </div>
</template>

<script>
import thumbImg from '../subcomponent/thumbImg.vue'
import mui from "../../../lib/mui/js/mui.min.js"
export default {
    data() {
        return {
            id : this.$route.params.id,
            thumbImg : [],
            infoData : {}
        }
    },
    created() {
        this.getGoodsInfoImg()
    },
    
    mounted(){
        mui(".mui-numbox").numbox()
    },
    components : {
        thumbImg,
    },
    methods : {
        getGoodsInfoImg() {
            this.$http.get('http://127.0.0.1/getGoodsInfoImg/' + this.id).then(res=>{
                this.infoData = res.body
                this.thumbImg = res.body.imgurl
            },err=>{

            })
        },
    }
}
</script>

<style lang="scss">
.goods-container {
    background-color: #eee;
    .num-box {
        margin: 10px auto;
    }
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
}
</style>
