<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.title">
					<router-link :to='"/newinfo/" + item.id'>
						<img class="mui-media-object mui-pull-left" :src="item.imgUrl">
						<div class="mui-media-body">
							<h4>{{ item.title }}</h4>
							<p class='mui-ellipsis'><span>发表时间 {{ item.addTime }}</span><span>点击次数:{{ item.click }}次</span></p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
           newlist : [], //接收新闻数据
        }
    },
    created(){
        this.getNewsList()
    },
    methods : {
        getNewsList(){
            this.$http.get("https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-newlist").then(data=>{
                    // console.log(获取到了数据 + data)
                    // console.log(data.body.data.message)
                    this.newlist = data.body.data.message
                },err=>{
                    console.log(请求发生错误了 + err)
                    
                }
            )
        }
    }
    
}
</script>

<style>
    .mui-media-body h4 {
        font-size: 14px;
    }
    .mui-ellipsis {
        color:skyblue;
        display: flex;
        justify-content: space-between;
    }
</style>