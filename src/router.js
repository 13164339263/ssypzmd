import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: () => import('./views/UserHome.vue'),
      children: [
        {
          path: '/userhome/userindex',
          name: 'userindex',
          component: () => import('./components/UserIndex.vue'),
        },


      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/home/adminindex',
          name: 'adminindex',
          component: () => import('./components/AdminIndex.vue'),
        },
        {
          path: '/home/usermanage',
          name: 'usermanage',
          component: () => import('./components/UserManage.vue'),
        },

      ]
    }
  ]
})
