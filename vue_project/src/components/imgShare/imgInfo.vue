<template>
    <div class="imgInfo-container">
        <h2>{{ imgInfoData.title }}</h2>
        <p class="subtitle">
            <span>发表时间:{{ imgInfoData.add_time }}</span>
            <span>点击 : {{ imgInfoData.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <div class="thumb">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        
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
            slide1 : [],
        }
    },
    created(){
        this.getImgInfoByID()
        this.getImgThumb()
    },
    methods : {
        getImgInfoByID() {
            this.$http.get('http://127.0.0.1/getImgInfo/' + this.id).then(res=>{
                this.imgInfoData = res.body
                // console.log(this.imgInfoData);
            },err=>{
                
            })
        },
        getImgThumb() {
            this.$http.get('http://127.0.0.1/getImgThumb/' + this.id).then(res=>{
                // console.log(res.body);
                for(var index = 0 ;index<res.body.imgurl.length ; index++){
                // res.body.imgurl.map((item,index) => {
                    // console.log(item);
                    res.body.slideObj[index].src = res.body.slideObj[index].msrc = res.body.imgurl[index]
                    res.body.slideObj[index].w = 200
                    res.body.slideObj[index].h = 200
                    // console.log(this.slide1[index].src);
                    // this.slide1[index].src = item.imgurl
                // });
                }
                console.log(res.body.slideObj);
                this.slide1 = res.body.slideObj
            },err=>{
                
            })
        },
        handleClose() {
            console.log('close event')
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

    .thumb {
        text-align: center;
    }
    .thumb img{
        width: 100px;
        height: 100px;
    }

    .thumb figure {
        margin: 5px;
        display: inline-block;
    }
</style>