<template>
    <div class="info-box">
        <h4 class="info-title">{{ redata.title }}</h4>
        <div class="info-subtitle">
            <span>发表时间:{{ redata.addTime }}</span>
            <span>点击数:{{ redata.click }}</span>
        </div>
        <hr>
        <div class="info-content" v-html="redata.content"></div>
        <hr>
        <comment></comment>
    </div>
</template>

<script>

import comment from '../subcomponent/comment.vue'

export default {
    data(){
        return {
            id : this.$route.params.id,
            redata : {}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        // 获取新闻详情
        getNewsInfo(){
            this.$http.get("https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-newsInfo").then(data=>{
                    // console.log(data.body.data[this.id]);
                    this.redata = data.body.data[this.id]
                },err=>{
                    console.log(请求发生错误了 + err)
                })
        },
    },
    components:{
        "comment":comment,
    }
}
</script>

<style>
.info-box .info-title{
    color:red;
    font-size: 18px;
    text-align: center;
    margin: 15px 0px;
}    
.info-box .info-subtitle{
    color: aqua;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.info-content img{
    width: 100%;
}


</style>