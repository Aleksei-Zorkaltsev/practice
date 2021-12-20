import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from "./components/HomePage/Main"
import Catalog from "./components/Catalog/Main"
import Auth from "./components/Auth/Main"

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
        path: "/login",
        component: Auth,
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes,
})
