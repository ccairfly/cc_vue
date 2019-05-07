<template>
    <!-- 购物车数字条界面 -->
    <div class="num-box">
        <span>
            <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='999' style="height:25px">
                <!-- "-"按钮，点击可减小当前数值 -->
                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                <input class="mui-numbox-input" type="number" :value="count" ref="numtext" 
                @change="dataChange" readonly/>
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
        }
    },
    methods : {
        dataChange(){
            var changeObj = {
                aid : this.gid,
                goodsCounts : this.$refs.numtext.value
            }
            this.$store.commit('updateGoodsCarData',changeObj)
        }
    },
    props : ["count","gid"],
    mounted(){
        mui(".mui-numbox").numbox()
    },
}   
</script>

<style scoped>
.num-box {
    margin: 10px auto;
}
</style>
