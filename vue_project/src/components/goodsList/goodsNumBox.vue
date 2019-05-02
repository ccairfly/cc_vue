<template>
    <div class="num-box">
        <span>购买数量 : </span> 
        <span>
            <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' :data-numbox-max='maxCount'>
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" value="1" @change="valueChange" ref="numtext"/>
                <!-- "+"按钮，点击可增大当前数值 -->
                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
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
        }
    },
    props:["maxCount"],
    methods : {
        // upHandler(){
        //     this.goodsCount++
        // },
        // downHandler(){
        //     this.goodsCount--
        // },
        valueChange(){
            // console.log(this.$refs.numbox.value);
            this.$emit("sendNum",parseInt(this.$refs.numtext.value))
        }
    },
    created(){
        // this.maxCount = 100
    },
    mounted(){
        mui(".mui-numbox").numbox()

    },
    watch: {
        maxCount:function(newValue,oldValue){
            // console.log("数据变化了:new" + newValue + ",,old" + oldValue);
            mui(".mui-numbox").numbox().setOption('max',newValue)
        },
    },
}   
</script>

<style scoped>
.num-box {
    margin: 10px auto;
}
</style>
