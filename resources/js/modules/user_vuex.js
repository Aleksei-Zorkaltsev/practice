import vueRouter from "../VueRouter";

export default {
    state: {
        user: null
    },
    getters: {
        getStateUser(state){
            return state.user
        }
    },
    actions: {
        async logout(context){
            axios.post('Api/logout')
                .then(response => {
                    context.commit('removeUser');
                    if(vueRouter.app.$route.path !== '/') vueRouter.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mutations: {

        setUser(state, user){
            state.user = user;
        },

        removeUser(state){
            state.user = null;
        }
    },
}
