import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Index from '../views/Index.vue'
import Productlist from '../views/Productlist.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/productlist',
        name: 'productlist',
        component: Productlist
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },

]

const router = new VueRouter({
  routes
})

export default router
