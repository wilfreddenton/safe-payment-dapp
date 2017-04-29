import Vue from 'vue'
import Router from 'vue-router'
import SafePay from '@/components/SafePay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SafePay',
      component: SafePay
    }
  ]
})
