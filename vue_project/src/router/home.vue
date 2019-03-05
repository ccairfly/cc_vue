<template>
    <div>
        <h3>this is Home component</h3>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-button type="primary" size="small" @click="btnHandler">点击</mt-button>
    </div>
</template>

<script>
    export default {
        data : function () {
            return {

            }
        },
        methods : {
            btnHandler(){
                this.$http.get('https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get').then(response => {
                    console.log(response.body);
                }, response => {
                // error callback
                });
            }
        }
    }
</script>

<style scoped>
    .mint-swipe {
        /* width: 300px; */
        height: 248px;
    }
    .mint-swipe .mint-swipe-item:nth-child(1) {
       background-color: greenyellow; 
    }
    .mint-swipe .mint-swipe-item:nth-child(2) {
       background-color: hotpink; 
    }
    .mint-swipe .mint-swipe-item:nth-child(3) {
       background-color: skyblue; 
    }
</style>