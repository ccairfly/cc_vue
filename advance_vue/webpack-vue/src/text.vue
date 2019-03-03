<template id="newtext">
        <div>
            <h3>{{ msg }}</h3>
            <router-link to="/" tag="button">back</router-link>
            <router-link to="/account" tag="button">进入账户</router-link>
            <router-link to="/goodslist" tag="button">进入商品</router-link>
            <router-view></router-view>
        </div>
</template>

<script>
// 向外暴露这个对象
export default {
    data() {
        return {
            // 暂时不可用插值表达式
            msg : "hello webpack vue --cc",
            msg2 : "这是一个寂寞的天,下着有些伤心的雨"
        }
    },
    methods: {
        show(){
            console.log("this is text.vue show method");
        }
    },
}
</script>

<style>
    
</style>