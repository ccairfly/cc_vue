<template>
        <div>
            <h3>{{ msg }}</h3>
            <mt-button size="small" type="primary" @click="show">small button</mt-button>
            <router-link to="/" tag="button">back</router-link>
            <router-link to="/account" tag="button">进入账户</router-link>
            <router-link to="/goodslist" tag="button">进入商品</router-link>
            <router-view></router-view>
        </div>
</template>

<script>
import { Toast } from 'mint-ui';
// 向外暴露这个对象
export default {
    data() {
        return {
            // 暂时不可用插值表达式
            msg : "hello webpack vue App--cc",
            msg2 : "这是一个寂寞的天,下着有些伤心的雨",
            toastInstance : null,
        }
    },
    methods: {
        show(){
            this.toastInstance = Toast({
                message: '这是一个寂寞的天',
                position: 'middle',
                duration: -1
                });
            this.removeToastDelay()
        },
        removeToastDelay(){
            setTimeout(() => {
                this.toastInstance.close()
            }, 3000);
        }
    },
}
</script>

<style>
    
</style>