import Vue from 'vue'
import VueRouter from 'vue-router'
import abcMart from '../views/abcMart.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: abcMart
  },
  {
    path: '/item/:id',
    name: 'item',
    component: () => import('../views/ItemDetail.vue')
  },
  {
    path: '/shopping',
    name: 'shopping-cart',
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/shopping/checkout',
    name: 'checkout',
    component: () => import('../views/ThanksToBuy.vue')
  },
  {
    path: '/shopping/checkoutlist',
    name: 'checkout-list',
    component: () => import('../views/CheckOutList.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
