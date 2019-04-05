import Mock from 'mockjs'

var Random = Mock.Random
var imgindex = Random.integer(0,11)

const page1 = [
    {
        code : 200,
        data: ["中学时暗恋班花,被同班的女汉子知道了,连忙请她保密,本以为向来爽朗不羁的她是不屑于告密的,结果丫飞快的把我出卖了.后来想想应该是我拜托她的方式不对,不该说什么这是男人之间的约定"]
    },
    {
        code : 200,
        data: ["目前被用在汽车上的浏览器因工作缓慢而“闻名”，因此决定用Chromium技术对其进行更新。比如，Google Chrome 和Opera(6.895, -0.36, -4.90%)浏览器就是基于该项技术运行"]
    },
]

const imgUrl = [
    'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg',
    'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
    'http://uploads.oh100.com/allimg/1709/117-1FZ5102542-52.jpg',
    'http://img.taopic.com/uploads/allimg/140626/240447-14062621151713.jpg',
    'http://img0.imgtn.bdimg.com/it/u=3972169330,4211815266&fm=214&gp=0.jpg',
    'http://img4.imgtn.bdimg.com/it/u=3806557979,3233516071&fm=214&gp=0.jpg',
    'http://pic17.nipic.com/20111031/8166867_002049106165_2.jpg',
    'http://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg',
    'http://pic19.nipic.com/20120321/3001435_141555714185_2.jpg',
    'http://pic40.nipic.com/20140413/12524762_163417225134_2.jpg',
    'http://a3.topitme.com/4/a4/53/1128058568ec753a44l.jpg',
    'http://img02.tooopen.com/images/20150512/tooopen_sy_123903738291.jpg'
]

const smallImgUrl = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471336175&di=d73cbb526b0442f2532164b25b844d7b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01260f55456cec0000019ae9de494a.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471336174&di=cbcf37e73b5715ddc1178c14e5a3bc68&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014de155456cec0000019ae9304e63.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471477088&di=f13eb892698bfdd38b4843749e0da086&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013cd7554b568e000001bf720578a9.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471497017&di=3c798b1d3d2f512ec763d0acb710a093&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0195fe554b568d000001bf72f0df17.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471794536&di=94161119a033652a65c78be7adf79434&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014d6d554b568d000001bf723aeeaa.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471828474&di=2dc4e3beb19a555649df1ddd7c037a16&imgtype=0&src=http%3A%2F%2Fww2.sinaimg.cn%2Fthumbnail%2Fa3643f27jw1e67zgu5wyvg202s02s0t5.gif',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471843330&di=5e90f4078f7314dde7ae3d5775edbfd4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cfbc554b568f000001bf72e8f783.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554471857158&di=8db43b49bbab0fd00605912da390e3a8&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b33e55456ceb0000019ae9344d51.jpg',
]

var mockdata1 = Mock.mock({
    code :200,
    'list|1-10': [{
        'id|+1': 1,
        'name' : '@cname',
        'cparagraph' : '@cparagraph(2)',
        'city' : '@city',
        'url' : imgUrl[imgindex]
    }],
})

//Mock图片列表数据
var mockImageData = Mock.mock({
    imgurl : imgUrl,
    'datalist|12' : [{
        'id|+1' : 0,
        'title' : '@ctitle(3, 12)',
        'abtract' : '@cparagraph(2)',
        'imgdataurl' : ''
    }]
})

var mockImgInfo = function() {
    return Mock.mock({
        'add_time' : '@date("yyyy-MM-dd")',
        'click' : '@integer(0, 999)',
        'content' : '@cparagraph(2, 6)',
        'title' : '@ctitle(3, 10)',
    })
} 

// var slideObj = new Array()
var mockImgSmall = Mock.mock({
    imgurl : smallImgUrl,
    'slideObj|8' : [{},]
})

const res = {
    page1,
    mockdata1,
    mockImageData,
    mockImgInfo,
    mockImgSmall,
}

export default res 