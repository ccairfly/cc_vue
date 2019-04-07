<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in swipeData " :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <mt-button type="primary" size="small" @click="btnHandler">点击获取data</mt-button>
        		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/imgShare">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
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
    import { Toast } from 'mint-ui';

    export default {
        data : function () {
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
                    // console.log(response.body.data.img);
                    this.swipeData = response.body.data.img;
                }, response => {
                // error callback
                    Toast("获取数据失败了")
                });
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 250px;
    }
    .mt-swipe-item,img{
        width: 100%;
        height: 100%;
    }
    /* .mint-swipe .mint-swipe-item:nth-child(1) {
       background: url("http://bpic.ooopic.com/17/85/10/17851052-1a895f0a596d69614e7c76afab83b802.jpg");
       background-repeat: no-repeat;
       background-size:cover;
    }
    .mint-swipe .mint-swipe-item:nth-child(2) {
       background: url("https://img.zcool.cn/community/01ce545541ecb4000001714aa4b104.jpg@1280w_1l_2o_100sh.jpg");
       background-repeat: no-repeat;
       background-size:cover;
    }
    .mint-swipe .mint-swipe-item:nth-child(3) {
       background: url("http://hbimg.b0.upaiyun.com/c86e48333af7abf2c5899ffb36afc68df850d86357d2-CgSaZJ_fw658");
       background-repeat: no-repeat;
       background-size:cover;
    } */
</style>