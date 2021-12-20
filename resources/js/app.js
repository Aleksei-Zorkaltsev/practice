require('./bootstrap');



window.Vue = require('vue').default;

import v_router from "./vueRouter";
import layout from "./VueLayout"


const app = new Vue({
    el: '#app',
    router: v_router,
    data: {
        user: {},
    },
    components:{
        'v-layout': layout,
    },
    methods: {
    },

});
