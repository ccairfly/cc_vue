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

const goodsImgUrl = [
    'https://gw.alicdn.com/bao/uploaded/i2/195639484/TB10J7djTvI8KJjSspjXXcgjXXa_!!0-item_pic.jpg',
    'https://gw.alicdn.com/bao/uploaded/i3/2114928378/O1CN012BlAi8h1ZmOqytd_!!2114928378.jpg',
    'https://gw.alicdn.com/bao/uploaded/i1/1951264887/TB2Le6xX1ySBuNjy1zdXXXPxFXa_!!1951264887.jpg',
    'https://gw.alicdn.com/bao/uploaded/i1/TB1e0L4HpXXXXawXXXXXXXXXXXX_!!0-item_pic.jpg',
    'https://gw.alicdn.com/bao/uploaded/i4/3050644528/TB2kQ40XkKWBuNjy1zjXXcOypXa_!!3050644528.jpg',
    'https://gw.alicdn.com/bao/uploaded/i2/124363249/TB20bguahlmpuFjSZPfXXc9iXXa_!!124363249.jpg',
    'https://gw.alicdn.com/bao/uploaded/i4/1602161069/TB1xD93g5qAXuNjy1XdXXaYcVXa_!!2-item_pic.png',
    'https://gw.alicdn.com/bao/uploaded/i1/3028112578/TB2p2RLXbKFJuJjSszgXXXVnXXa_!!3028112578.jpg',
    'https://gw.alicdn.com/bao/uploaded/i4/TB1ODHhPpXXXXbnXpXXXXXXXXXX_!!0-item_pic.jpg',
    'https://gw.alicdn.com/bao/uploaded/i4/840091576/TB20t05mwvD8KJjSsplXXaIEFXa_!!840091576.jpg',
    'https://gw.alicdn.com/bao/uploaded/i3/144178740/TB2D33uc90mpuFjSZPiXXbssVXa_!!144178740.jpg',
    'https://gw.alicdn.com/bao/uploaded/i4/TB18UxiFVXXXXbZXFXXXXXXXXXX_!!0-item_pic.jpg',
]

const goodsImgUrl2 = [
    'https://img.alicdn.com/bao/uploaded/i3/1768983454/O1CN01Bq3ox01bNyWd7x8UF_!!0-item_pic.jpg_240x240.jpg',
    'https://img.alicdn.com/bao/uploaded/i2/1768983454/O1CN01Ib9hlt1bNyWW0nlYi_!!0-item_pic.jpg_240x240.jpg',
    'https://img.alicdn.com/bao/uploaded/i4/1768983454/O1CN01d89vL71bNyWH2eZDT_!!0-item_pic.jpg_240x240.jpg',
    'https://img.alicdn.com/bao/uploaded/i4/1768983454/TB2pwZ9p67nBKNjSZLeXXbxCFXa_!!1768983454.jpg_240x240.jpg',
    'https://gw.alicdn.com/bao/uploaded/TB1_P_EpNTpK1RjSZFKSuu2wXXa.jpg_300x300q75.jpg',
]

const goodsInfoImgUrl = [
    {url:'https://pics0.baidu.com/feed/d53f8794a4c27d1e2022d5b97be3086addc43806.jpeg?token=f190ea65fcb218ecf3c209a56e461e37&s=2B026480F1FF102E5D96E9D10300108B'},
    {url:'https://pics1.baidu.com/feed/023b5bb5c9ea15cebeb91eb9d6369ff73b87b2e2.jpeg?token=cb4d562abcdab06692ace1f2fc7501fb&s=25F2E4224F2027078A55B8830300A0C0'},
    {url:'https://pics2.baidu.com/feed/d043ad4bd11373f05f9456fec439eefffaed04e6.jpeg?token=9040608aac199c25416cd5286f65c4f2&s=461084297434238E99BAD5C9030020A1'},
    {url:'https://pics7.baidu.com/feed/c995d143ad4bd11384fc737b3a99010b4bfb0505.jpeg?token=32664480620162538724b5d5ff5761c4&s=5B95B0AAC91708CA2E11212F0300C0C2'},
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

var mockGoodsInfoImg = Mock.mock({
    'imgurl' : goodsInfoImgUrl,
    'click' : '@integer(0, 999)',
    'content' : '@cparagraph(2, 6)',
    'title' : '@ctitle(3, 10)',
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

var mockGoodsList = function(args) {
    var goodslisturl = []
    var init_data = 0
    if(args == 1){
        goodslisturl = goodsImgUrl
    }
    else {
        goodslisturl = goodsImgUrl2
        init_data = 12
    }
    return Mock.mock({
        goodslisturl ,
        'goodsData|12' : [{
            'id|+1' : init_data ,
            'remain' : '@integer(0, 999)',
            'price_new' : '@integer(0, 9999)',
            'price_old' : '@integer(0, 9999)',
            'title' : '@ctitle(8, 30)',
        }]
    })
}


const res = {
    page1,
    mockdata1,
    mockImageData,
    mockImgInfo,
    mockImgSmall,
    mockGoodsList,
    mockGoodsInfoImg,
}

export default res 