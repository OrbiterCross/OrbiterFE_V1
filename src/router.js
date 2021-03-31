import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home,
      component: resolve => require(['./components/Home.vue'], resolve),
      meta: {
        title: 'Orbiter-cross rollups'
      }
    },
    {
      path: '/token',
      name: 'token',
      component: resolve => require(['./components/Home.vue'], resolve),
      meta: {
        title: 'Orbiter-cross rollups'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['./components/register.vue'], resolve),
      meta: {
        title: 'Orbiter-cross rollups'
      }
    }
  ]
})