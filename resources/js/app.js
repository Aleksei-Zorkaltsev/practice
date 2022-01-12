import VueRouter from "./VueRouter";

require('./bootstrap');

window.Vue = require('vue').default;

import v_router from "./VueRouter"
import layout from "./VueLayout"
import vuexStore from "./VuexStore"
import route_vuex from "./modules/route_vuex";

const app = new Vue({
    el: '#app',
    router: v_router,
    store: vuexStore,
    components:{
        'vue-layout': layout,
    },

});
