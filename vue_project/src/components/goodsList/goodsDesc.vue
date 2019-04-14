<template>
    <div class="goodsDesc-box">
        <h3> {{ newInfo.title }} </h3>
        <hr>
        <div v-html="newInfo.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id : this.$route.params.id,
            newInfo:{},
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods : {
        getGoodsDesc() {
            this.$http.get('https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-newsInfo').then(res=>{
                // console.log(res.body.data);
                this.newInfo = res.body.data[this.id]
            },err=>{

            })
        }
    },
}
</script>

<style lang="scss">
.goodsDesc-box {
    padding: 3px;
    h3 {
        font-size: 16px;
        color: #226aff;
        margin: 15px 0;

    }
}
</style>