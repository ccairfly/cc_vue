<template>
    <div class="imgInfo-container">
        <h3>{{ imgInfoData.title }}</h3>
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
    </div>
</template>

<script>
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
                console.log(this.imgInfoData);
                
            },err=>{
                
            })
        }
    },
}
</script>

<style >
    
</style>