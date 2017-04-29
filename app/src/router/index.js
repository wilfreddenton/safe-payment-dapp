import Vue from 'vue'
import Router from 'vue-router'
import SafePay from '@/components/SafePay'
import Sale from '@/components/Sale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: SafePay
    },
    {
      path: '/sale/:address',
      name: 'sale',
      component: Sale
    }
  ]
})
