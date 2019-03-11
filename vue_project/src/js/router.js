
import VueRouter from "vue-router"

import home from "../components/home.vue"
import member from "../components/member.vue"
import shop from "../components/shop.vue"
import search from "../components/search.vue"
import newlist from "../components/news/newlist.vue"
import newinfo from "../components/news/newInfo.vue"

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