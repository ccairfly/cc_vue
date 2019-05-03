<template>
        <div class="app-container">
            <mt-header fixed title="cc vue project">
                <a slot="left">
                <mt-button icon="back" @click="backHandler">返回</mt-button>
                </a>
            </mt-header>
            
            <router-view></router-view>
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item-cc" to="/home">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item-cc" to="/member">
                    <span class="mui-icon mui-icon-contact">
                    </span>
                    <span class="mui-tab-label">会员</span>
                </router-link>
                <router-link class="mui-tab-item-cc" to="/shop">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="shopCartBadge">{{ $store.state.goodsCount }}</span></span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item-cc" to="/search">
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
        backHandler() {
            this.$router.back()
        }
    },
}
</script>

<style scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;   
        /* 使用padding-bottom来防止最后一条信息显示不全的问题 */
    }
    .mui-bar-tab .mui-tab-item-cc.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-cc {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-cc .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-cc .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>