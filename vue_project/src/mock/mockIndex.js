import Mock from 'mockjs'
import mydata from './mockData'

Mock.mock('http://127.0.0.1/main.php?cid=1','post',()=>{
    return mydata.page1
});

Mock.mock('http://127.0.0.1/getdata','get',()=>{
    return mydata.mockdata1
});