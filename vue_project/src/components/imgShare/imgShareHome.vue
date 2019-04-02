<template>
    <div class="mui-content">
			<!-- 顶部滑动区域 -->
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							全部
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
                        <a class="mui-control-item" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							体育
						</a>
					</div>
				</div>

			</div>
			<!-- 图片列表区域 -->
			<ul class="photolist">
				<router-link v-for="item in imgdatalist" :key="item.id" :to="'/home/imgInfo/' + item.id" tag="li">
					<img v-lazy="item.imgdataurl">
					<div class="info">
						<h1 class="info-title">{{ item.title }}</h1>
						<div class="info-body">{{ item.abtract }}</div>
					</div>
				</router-link>
			</ul>
		</div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js"
import { Toast } from 'mint-ui';

export default {
    data(){
        return {
			imgUrlList:[], //图片列表的数据
			imgdatalist:[]
        }
	},
	created(){
		this.getImageData()
	},
	mounted() {
		//初始化滑动条需要在mounted之后
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods : {
		getImageData(){
			this.$http.get("http://127.0.0.1/getImage").then(res=>{
				this.imgUrlList = res.body.imgurl
				// console.log(this.imgUrlList);
				this.imgdatalist = res.body.datalist
				this.imgdatalist.forEach((item,index)=>{
					this.imgdatalist[index].imgdataurl = this.imgUrlList[index]
				})
				// console.log(this.imgdatalist);
			},err=>{
				Toast("获取图片列表失败")
			})
		}
	}
}
</script>

<style>
* { 
    touch-action: pan-y; 
} 

img {
	width: 100%;
  	height: 100%;
	margin: auto;
	vertical-align: middle;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.photolist {
	list-style: none;
	padding: 10px;
	margin: 0px;
	padding-bottom: 0px;
}
.photolist li{
	/* width: 400px;
  	height: 300px; */
	background-color: #ccc;
	margin-bottom: 10px;
	text-align: center;
	box-shadow: 0,0,9px,#999;
	position: relative;
}

.info {
	color: white;
	text-align: left;
	position: absolute;
	bottom: 0px;
	background-color: rgba(0,0,0,0.4);
	width: 100%;
}
.info .info-title {
	font-size: 14px;
}
.info .info-body {
	font-size: 12px;
}
</style>
