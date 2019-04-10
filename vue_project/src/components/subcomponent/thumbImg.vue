<template>
    <div class="thumb-box">
        <mt-swipe :auto="3000">
            <mt-swipe-item class="cc-swipe" v-for="item in swipeData " :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data : function () {
        return {
            
        }
    },
    props:["swipeData"],
    
    methods : {
        
    }
}
</script>

<style lang="scss">
.thumb-box {
    .mint-swipe {
        height: 250px;
    }
    .cc-swipe {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
