import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/userhome',
            name: 'userhome',
            component: () =>
                import ('./views/UserHome.vue'),
            children: [{
                    path: '/userhome/userindex',
                    name: 'userindex',
                    component: () =>
                        import ('./components/UserIndex.vue'),
                },
                {
                    path: '/userhome/allgoods/:id',
                    name: 'allgoods',
                    component: () =>
                        import ('./components/AllGoods.vue'),
                },


            ]
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('./views/Home.vue'),
            children: [{
                    path: '/home/adminindex',
                    name: 'adminindex',
                    component: () =>
                        import ('./components/AdminIndex.vue'),
                },
                {
                    path: '/home/usermanage',
                    name: 'usermanage',
                    component: () =>
                        import ('./components/ManageUser.vue'),
                },
                {
                    path: '/home/goodsmanage',
                    name: 'goodsmanage',
                    component: () =>
                        import ('./components/ManageGoods.vue'),
                },
                {
                    path: '/home/logomanage',
                    name: 'logomanage',
                    component: () =>
                        import ('./components/ManageLogistic.vue'),
                },
                {
                    path: '/home/ordermanage',
                    name: 'ordermanage',
                    component: () =>
                        import ('./components/ManageOrder.vue'),
                },

            ]
        },
        {
            path: '/myinfo',
            name: 'myinfo',
            component: () =>
                import ('./views/MyInfo.vue'),
        },
        {
            path: '/goodsdetail',
            name: 'goodsdetail',
            component: () =>
                import ('./views/GoodsDetail.vue'),
        },
    ]
})