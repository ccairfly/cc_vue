<template>
    <div class="imgInfo-container">
        <h2>{{ imgInfoData.title }}</h2>
        <p class="subtitle">
            <span>发表时间:{{ imgInfoData.add_time }}</span>
            <span>点击 : {{ imgInfoData.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->

        <!-- 图片摘要区域 -->
        <div class="abstract" v-html="imgInfoData.content">
            
        </div>

        <!-- 放置现成的评论子组件 -->
        <cmt-box></cmt-box>
    </div>
</template>

<script>

import comment from '../subcomponent/comment.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,   //从url的信息中获取id
            imgInfoData : {},
        }
    },
    created(){
        this.getImgInfoByID()
    },
    methods : {
        getImgInfoByID(){
            this.$http.get('http://127.0.0.1/getImgInfo/' + this.id).then(res=>{
                this.imgInfoData = res.body
                // console.log(this.imgInfoData);
            },err=>{
                
            })
        }
    },
    components : {
        'cmt-box' : comment ,
    }
}
</script>

<style>
    .imgInfo-container {
        padding: 3px;
    }

    .imgInfo-container h2 {
        color: #26a2ff;
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }

    .imgInfo-container .subtitle {
        display: flex;
        justify-content:space-between;
        font-size: 12px;
    }

    .imgInfo-container .abstract {
        font-size: 14px;
        line-height: 30px;
    }
</style>