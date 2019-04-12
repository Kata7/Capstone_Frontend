import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./views/Main.vue'),
      props: true
    },
    {
      path: '/selection',
      name: 'selection',
      component: () => import('./views/Selection.vue'),
      props: {default: true, current: {}}
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue'),
      props: true
    }
  ]
})
