<template>
        <div class="app-container">
            <mt-header fixed title="cc vue project">
                <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>
            <h3>{{ msg }}</h3>
            <!-- <mt-button size="small" type="primary" @click="show">small button</mt-button>
            <router-link to="/" tag="button">back</router-link>
            <router-link to="/account" tag="button">进入账户</router-link>
            <router-link to="/goodslist" tag="button">进入商品</router-link>
            <router-view></router-view> -->
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat">
                    <span class="mui-icon mui-icon-email">
                        <!-- <span class="mui-badge">9</span> -->
                    </span>
                    <span class="mui-tab-label">消息</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact">
                    <span class="mui-icon mui-icon-contact"></span>
                    <span class="mui-tab-label">通讯录</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map">
                    <span class="mui-icon mui-icon-gear"></span>
                    <span class="mui-tab-label">设置</span>
                </a>
		    </nav>
        </div>
</template>

<script>
// 向外暴露这个对象

export default {
    data() {
        return {
            // 暂时不可用插值表达式
            msg : "hello webpack vue App--cc",
            msg2 : "这是一个寂寞的天,下着有些伤心的雨",
        }
    },
    methods: {
        show(){
            console.log("this is App.vue show");
        },
    },
}
</script>

<style scoped>
    .app-container {
        padding-top: 40px;
    }
</style>