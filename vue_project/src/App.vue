<template>
        <div class="app-container">
            <mt-header fixed title="cc vue project">
                <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                </router-link>
            </mt-header>

            <h3>{{ msg }}</h3>
            <router-view></router-view>

            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item" to="/member">
                    <span class="mui-icon mui-icon-contact">
                        <!-- <span class="mui-badge">9</span> -->
                    </span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item" to="/shop">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item" to="/search">
                    <span class="mui-icon mui-icon-search"></span>
                    <span class="mui-tab-label">搜索</span>
                </router-link>
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