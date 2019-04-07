<template>
    <div class="goods-list-box">
        <div class="goods-item">
            <img 
            src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3056162727/O1CN01xKEBwX1W10ZP7I5nl_!!0-item_pic.jpg_360x360Q90.jpg_.webp" 
            alt="">
            <div>
                <h3 class="goods-title">戴尔专业笔记本电脑 灵越5000 全新上市</h3>
                <div class="goods-info">
                    <p class="price">
                        <span class="new">￥4699</span>
                        <span class="old">￥5199</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>
            
        </div>
        <div class="goods-item">
            <img 
            src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3056162727/O1CN01xKEBwX1W10ZP7I5nl_!!0-item_pic.jpg_360x360Q90.jpg_.webp" 
            alt="">
            <h3 class="goods-title">戴尔专业笔记本电脑 灵越5000 全新上市 超强性能 吃鸡LOL运行流畅不卡顿 WULI cc推荐</h3>
            <div class="goods-info">
                <p class="price">
                    <span class="new">￥4699</span>
                    <span class="old">￥5199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div> 
        <div class="goods-item">
            <img 
            src="https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3056162727/O1CN01xKEBwX1W10ZP7I5nl_!!0-item_pic.jpg_360x360Q90.jpg_.webp" 
            alt="">
            <h3 class="goods-title">戴尔专业笔记本电脑 灵越5000 全新上市</h3>
            <div class="goods-info">
                <p class="price">
                    <span class="new">￥4699</span>
                    <span class="old">￥5199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.goods-list-box {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item {
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        padding: 2px;
        width: 49%;
        margin: 4px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img {
            margin: 0px;
            width: 100%;
            height: 200px;
        }
        .goods-title {
            font-size: 14px;
        }
        .goods-info {
            background-color: #ddd;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .new {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 8px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
