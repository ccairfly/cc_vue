
import VueRouter from "vue-router"

import account from "../router/account.vue"
import login from "../router/login.vue"
import register from "../router/register.vue"
import goodslist from "../router/goodslist.vue"

var router = new VueRouter({
    routes : [
        { path: '/',  },
        { path: '/goodslist', component:goodslist },
        { path: '/account', component : account ,children : [
            { path: '/login', component : login },
            { path: '/register', component : register },
        ]},
    ]
})

export default router