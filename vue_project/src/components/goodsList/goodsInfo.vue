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
            <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
		</div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
            <div class="mui-card-footer">页脚</div>
		</div>
    </div>
</template>

<script>
import thumbImg from '../subcomponent/thumbImg.vue'
export default {
    data() {
        return {
            id : this.$route.params.id,
            thumbImg : []
        }
    },
    created() {
        this.getGoodsInfoImg()
    },
    components : {
        thumbImg,
    },
    methods : {
        getGoodsInfoImg() {
            this.$http.get('http://127.0.0.1/getGoodsInfoImg/' + this.id).then(res=>{
                console.log(res.body);
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
    }
</style>
