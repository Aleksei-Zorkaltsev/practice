import Vue from 'vue'
import Vuex from 'vuex'
import userModule from "./modules/user_vuex"
import loginFormModule from "./modules/login_form_vuex"
import productModule from "./modules/product_vuex";
import registrationModule from "./modules/registration_form_vuex";
import catalogModule from "./modules/catalog_vuex";
import routeModule from "./modules/route_vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userModule,
        loginFormModule,
        productModule,
        registrationModule,
        catalogModule,
        routeModule,
    },
})
export default store;
