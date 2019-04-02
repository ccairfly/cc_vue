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

// Mock.mock(/\/getImgInfo\/[0-9]+/,'get',()=>{
//     return mydata.mockImgInfo
// });
