import Mock from 'mockjs'
import mydata from './mockData'

Mock.mock('http://127.0.0.1/main.php?cid=1','post',()=>{
    return mydata.page1
});

Mock.mock('http://127.0.0.1/getdata','get',()=>{
    return mydata.mockdata1
});

Mock.mock('http://127.0.0.1/getImage','get',()=>{
    return mydata.mockImageData
});

// 使用正则表达式的时候不需要引号
Mock.mock(/\/getImgInfo\/\d+/,'get',()=>{
    return mydata.mockImgInfo()
});

Mock.mock(/\/getImgThumb\/[0-9]+/,'get',()=>{
    return mydata.mockImgSmall
});

Mock.mock(/getGoods\?pageIndex=1/,'get',()=>{
    // console.log(arguments);
    return mydata.mockGoodsList(1)
});

Mock.mock(/getGoods\?pageIndex=2/,'get',()=>{
    // console.log(arguments);
    return mydata.mockGoodsList(2)
});

Mock.mock(/\/getGoodsInfoImg\/[0-9]+/,'get',()=>{
    return mydata.mockGoodsInfoImg
});

Mock.mock(/\/getGoodsDesc\/[0-9]+/,'get',()=>{
    return mydata.mockdata1
});