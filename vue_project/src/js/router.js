
import VueRouter from "vue-router"

import home from "../router/home.vue"
import member from "../router/member.vue"
import shop from "../router/shop.vue"
import search from "../router/search.vue"
import newlist from "../router/news/newlist.vue"
import newinfo from "../router/news/newInfo.vue"

var router = new VueRouter({
    routes : [
        { path: '/', redirect : "/home" },
        { path: '/home', component:home },
        { path: '/search', component:search },
        { path: '/shop', component:shop },
        { path: '/member', component:member },
        { path: '/newlist', component:newlist },
        { path: '/newinfo/:id', component:newinfo },
        // { path: '/account', component : account ,children : [
        // ]},
    ],
    linkActiveClass : "mui-active"
})

export default router