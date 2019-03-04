
import VueRouter from "vue-router"

import home from "../router/home.vue"
import member from "../router/member.vue"
import shop from "../router/shop.vue"
import search from "../router/search.vue"

var router = new VueRouter({
    routes : [
        { path: '/', redirect : "/home" },
        { path: '/home', component:home },
        { path: '/search', component:search },
        { path: '/shop', component:shop },
        { path: '/member', component:member },
        // { path: '/account', component : account ,children : [
        //     { path: '/login', component : login },
        //     { path: '/register', component : register },
        // ]},
    ],
    linkActiveClass : "mui-active"
})

export default router