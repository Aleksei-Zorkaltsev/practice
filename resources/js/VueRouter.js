import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "./components/HomePage/MainHomepage"
import Catalog from "./components/Catalog/MainCatalog"
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
        name: 'Login',
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
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes,
})
