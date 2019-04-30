<template>
    <div class="num-box">
        <span>购买数量 : </span> 
        <span>
            <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' :data-numbox-max='maxCount'>
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button" @click="downHandler">-</button>
                <input class="mui-numbox-input" type="number" v-model="goodsCount"/>
                <!-- "+"按钮，点击可增大当前数值 -->
                <button class="mui-btn mui-numbox-btn-plus" type="button" @click="upHandler">+</button>
            </div>
        </span>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js"
export default {
    data(){
        return {
            goodsCount : 1,
            maxCount : 10,
        }
    },
    methods : {
        upHandler(){
            this.goodsCount++
        },
        downHandler(){
            this.goodsCount--
        }
    },
    created(){
        // this.maxCount = 100
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    watch: {
        goodsCount(){
            console.log("数据变化");
            
        }
    },
}   
</script>

<style scoped>
.num-box {
    margin: 10px auto;
}
</style>
