<template>
    <div>
        <thumbImg :swipeData="swipeData"></thumbImg>
        <mt-button type="primary" size="small" @click="btnHandler">点击获取data</mt-button>
        		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/imgShare">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/goodsList">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
    </div>
</template>

<script>

import thumbImg from './subcomponent/thumbImg.vue'
export default {
    data() {
        return {
            swipeData : []
        }
    },
    created(){
        this.getSwipeImage()
    },
    methods : {
        btnHandler(){
            this.$http.get('http://127.0.0.1/getdata').then(response => {
                console.log(response.body);
            }, response => {
            // error callback
            });
        },
        getSwipeImage(){
            this.$http.get('https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-image').then(response => {
                this.swipeData = response.body.data.img;
            }, response => {
            // error callback
                Toast("获取数据失败了")
            });
        }
    },
    components: {
        thumbImg ,
    }
}
</script>

<style scoped>
    
</style>