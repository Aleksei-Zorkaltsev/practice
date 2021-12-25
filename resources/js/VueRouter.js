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

const routes = [
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

export default new VueRouter({
    mode: "history",
    routes: routes,
})
