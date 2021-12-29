import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "./components/HomePage/MainHomepage"
import Catalog from "./components/Catalog/MainCatalog"
import Product from "./components/Product/MainProduct";
import Cart from "./components/Cart/MainCart";
import Registry from "./components/Auth/Registry"
import Login from "./components/Auth/Login"
import Account from "./components/Account/MainAccount";
import Admin from "./components/Admin/MainAdmin";

import route_vuex from "./modules/route_vuex";

const routes = [
    {
        path: "/admin",
        component: Admin
    },
    {
        path: "/",
        component: Home
    },
    {
        path: "/man",
        component: Catalog,
    },
    {
        path: "/woman",
        component: Catalog,
    },
    {
        path: "/kids",
        component: Catalog,
    },
    {
        path: "/products/*",
        component: Product,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/registry",
        component: Registry,
    },
    {
        path: '/account',
        component: Account
    },
    {
        path: '/cart',
        component: Cart,
    }
]

const router = new VueRouter({
    mode: "history",
    routes: routes,
})
export default router;
