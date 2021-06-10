import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/home/index'
import test from '../views/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/btn',
      name: 'btn',
      component: () => import('../views/components/btn')
    },
    {
      path: '/savebtn',
      name: 'savebtn',
      component: () => import('../views/components/savebtn')
    }
  ]
})
