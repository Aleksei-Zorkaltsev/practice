import Vue from 'vue'
import Vuex from 'vuex'
import userModule from "./modules/user_vuex"
import loginFormModule from "./modules/login_form_vuex"
import productModule from "./modules/product_module";
import registrationModule from "./modules/registration_form_vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userModule,
        loginFormModule,
        productModule,
        registrationModule
    },
})
export default store;
