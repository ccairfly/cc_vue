<template>
    <div class="comment-box">
        <h3>发表评论</h3>
        <hr>
        <textarea id="textarea" rows="5" placeholder="请输入要BB的内容(最多200个字)" v-model="commentMessage"></textarea>
        <button type="button" class="mui-btn mui-btn-primary mui-btn-block" @click="postComment">点击发表</button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item,index) in commentList" :key="item.add_time">
                <div class="cmt-head">
                    第{{ index }}楼:&nbsp;&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;&nbsp;日期:2019-03-11 22:46
                </div>
                <div class="cmt-body">
                    {{ item.comment | commentFilter}}
                </div>
            </div>
        </div>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">加载更多</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            commentList:[],
            pageIndex:1,
            commentMessage : ""
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){
            this.$http.get("https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-comment")
            // this.$http.get("https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-comment/" + this.newInfoId + "?pageIndex=" + this.pageIndex )
            .then(data=>{
                this.commentList = data.body.data.message
                // console.log(this.commentList);
            },err=>{
                console.log("这是一个寂寞的错误");
            })
        },
        postComment(){
            console.log("发表评论的方法");
            // this.$http.post();
        },
    },
    filters: {
        commentFilter: function (value) {
            if ((value == "")||(value ==undefined)) return '该用户很,懒啥也没留下'
            return value
        }
    },
    props:["newInfoId"]
}
</script>

<style scoped>
.comment-box {
    padding: 10px 0px;
}
.comment-box #textarea {
    margin-top: 10px;
    margin-bottom: 5px;
}

.comment-box .comment-list{
    margin-top: 5px;
}

.comment-box .cmt-head{
    background-color: #ccc;
    line-height: 30px;
}

.comment-box .cmt-body{
    line-height: 30px;
    text-indent: 2em;
}
</style>

