require('./bootstrap');



window.Vue = require('vue').default;

import v_router from "./vueRouter";
import layout from "./VueLayout"

const store = {
    debug: true,
    state: {
        user: null,
        auth: false,
    },


    setMessageAction(newValue) {
        if (this.debug) console.log("setMessageAction вызвано с ", newValue);
        this.state.message = newValue;
    },
    clearMessageAction() {
        if (this.debug) console.log("clearMessageAction вызвано");
        this.state.message = "";
    }
};

const app = new Vue({
    el: '#app',

    router: v_router,

    data: {
        auth: false,
        user: null,
        state: store.state
    },

    components:{
        'vue-layout': layout,
    },

    methods: {
        async getUser() {
             try {
                 const response = await axios.get('/Api/user');
                 this.user = response.data;
             } catch (error) {}
        }
    },

    mounted() {
        if(this.$route.path !== '/login') !this.user && this.getUser();
    }
});
