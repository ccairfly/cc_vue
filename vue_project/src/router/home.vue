<template>
    <div>
        <h3>this is Home component</h3>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

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