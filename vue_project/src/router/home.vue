<template>
    <div>
        <h3>this is Home component</h3>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>
                <!-- <img src="http://e.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=ddcf0a2b5f82b2b7a7ca31c0049de7d9/f3d3572c11dfa9ecf698c43864d0f703918fc16f.jpg"> -->
            </mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-button type="primary" size="small" @click="btnHandler">点击</mt-button>
        		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
    </div>
</template>

<script>
    export default {
        data : function () {
            return {

            }
        },
        methods : {
            btnHandler(){
                this.$http.get('https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-data').then(response => {
                    console.log(response.body);
                }, response => {
                // error callback
                });
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        /* width: 300px; */
        height: 300px;
    }
    .mint-swipe .mint-swipe-item:nth-child(1) {
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
    }
</style>