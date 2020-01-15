import Mock from 'mockjs'

let visitorData = [
    {
        img: "https://tvax2.sinaimg.cn/crop.0.0.888.888.180/005CFH1Sly8g8cncjmizyj30oo0oomy4.jpg?KID=imgbed,tva&Expires=1579101098&ssig=X%2FJK1e0kCB",
        name: "Jane",
        date: "2019-10-21",
        para: "Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans."
    },
    {
        img: "https://tvax2.sinaimg.cn/crop.0.0.512.512.180/dec99b9bly8fytghmgbspj20e80e874k.jpg?KID=imgbed,tva&Expires=1579101098&ssig=IV4BNfD1JW",
        name: "Danny",
        date: "2019-11-25",
        para: "Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans."
    }
]

Mock.mock('/news/visitor', 'get', {
    data: visitorData
})

Mock.mock('/news/addPara','post',function(options){
    let content=options.body
    
    visitorData.push(content)
    console.log(visitorData)
})

Mock.mock('/news/gettable', 'get', {
    data: {
        tableData: [
            { ID: 32, name: "张三", price: '322', image: "https://wxt.sinaimg.cn/thumb300/0074HXD9gy1gaewsru3z1j3034035jr6.jpg?tags=%5B%5D", location: "广东省广州市", status: "成功", date: '2016-05-02' },
            { ID: 46, name: "李四", price: '434', image: "https://wxt.sinaimg.cn/thumb300/0074HXD9gy1gaep6nl3y4j308c08cq30.jpg?tags=%5B%5D", location: "江苏省南通市", status: "失败", date: '2016-04-12' },
            { ID: 21, name: "王五", price: '325', image: "https://wxt.sinaimg.cn/thumb300/0074HXD9gy1gadijmyivlj30qo0jy76b.jpg?tags=%5B%5D", location: "山西省太原市", status: "成功", date: '2017-02-14' },
            { ID: 16, name: "赵六", price: '656', image: "https://tvax2.sinaimg.cn/crop.0.0.996.996.180/0073LvwEly8fuxpepz7pyj30ro0ro0uj.jpg?KID=imgbed,tva&Expires=1578865492&ssig=KrY5sVjjwp", location: "广东省深圳市", status: '成功', date: '2013-07-24' },
            { ID: 47, name: "孙七", price: '543', image: "https://tvax3.sinaimg.cn/crop.0.0.1002.1002.180/006lOefaly8ga4jce9hz7j30ru0ru76p.jpg?KID=imgbed,tva&Expires=1578865492&ssig=LxB%2BahQ2Df", location: "云南省丽江市", status: "失败", date: '2016-05-22' },
            { ID: 9, name: "周八", price: '45', image: "https://tva4.sinaimg.cn/crop.0.0.751.751.180/ece59912jw8fcel8f3b7yj20kv0kvjt8.jpg?KID=imgbed,tva&Expires=1578865492&ssig=gmmbKyo3p8", location: "云南省昆明市", status: "失败", date: '2014-09-30' },
            { ID: 7, name: "吴九", price: '776', image: "https://tvax2.sinaimg.cn/crop.0.0.1080.1080.180/683d5fd5ly8fyh5ubedwpj20u00u075g.jpg?KID=imgbed,tva&Expires=1578865492&ssig=rW1en%2F3fub", location: "广东省江门市", status: "成功", date: '2017-10-02' },

            { ID: 13, name: "彭雅琪", price: '32', image: "https://tvax2.sinaimg.cn/crop.0.0.350.350.180/0060RKeQly8fe074u81rxj309q09qgmt.jpg?KID=imgbed,tva&Expires=1578929162&ssig=DKsJ%2B5HOvP", location: "广东省广州市", status: "成功", date: '2016-05-02' },
            { ID: 22, name: "邹诗雨", price: '434', image: "https://tva4.sinaimg.cn/crop.0.0.512.512.180/69917555jw8eq6ux7fycrj20e80e8gma.jpg?KID=imgbed,tva&Expires=1578929174&ssig=hY4W2mLabD", location: "江苏省南通市", status: "失败", date: '2016-04-12' },
            { ID: 45, name: "王彬焱", price: '32435', image: "https://tvax1.sinaimg.cn/crop.0.0.1125.1125.180/ac593e95ly8fn4gnbq59zj20v90v9jst.jpg?KID=imgbed,tva&Expires=1578929174&ssig=FCkUXmmcg4", location: "山西省太原市", status: "成功", date: '2017-02-14' },
            { ID: 17, name: "张文韬", price: '66', image: "https://tvax2.sinaimg.cn/crop.0.0.1125.1125.180/0067TKFily8fvw7oast8aj30v90v9t9l.jpg?KID=imgbed,tva&Expires=1578929208&ssig=noEwZCS8PQ", location: "福建省厦门市", status: '成功', date: '2013-07-24' },
            { ID: 43, name: "张文韬", price: '5143', image: "https://tvax3.sinaimg.cn/crop.0.0.512.512.180/006udyxIly8g1rlfgv6d7j30e80e8t98.jpg?KID=imgbed,tva&Expires=1578929230&ssig=K9xQUnAMmW", location: "广东省佛山市", status: "失败", date: '2016-05-22' },
            { ID: 50, name: "肖博约", price: '415', image: "https://tvax4.sinaimg.cn/crop.0.0.512.512.180/0064sSKSly8gagzz5mlfuj30e80e8t9h.jpg?KID=imgbed,tva&Expires=1578929263&ssig=7H%2BqOdelA3", location: "福建省厦门市", status: "失败", date: '2014-09-30' },
            { ID: 12, name: "陈肖逍", price: '7756', image: "https://tvax3.sinaimg.cn/crop.14.0.722.722.180/006xTl7Yly8fgupu6rsfaj30ku0k2wet.jpg?KID=imgbed,tva&Expires=1578929263&ssig=49jajDthlI", location: "广东省佛山市", status: "成功", date: '2017-10-02' },
        ]
    }
})

Mock.mock('/news/gettoken', "post", function (options) {
    let obj = JSON.parse(options.body)//from

    if (obj.username === 'admin') {
        return {
            data: {
                token: "adminToken"
            }
        }
    } else if (obj.username === 'editor') {
        return {
            data: {
                token: "editorToken"
            }
        }
    }
})
Mock.mock('/news/adminrole', 'get', function (options) {
    return {
        data: {
            role: "admin"
        }
    }
})
Mock.mock('/news/editorrole', 'get', function (options) {
    return {
        data: {
            role: "editor"
        }
    }
})


export default Mock