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
                    vueRouter.push('login')
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mutations: {

        setUser(state, user){
            console.log('setUser', user)
            state.user = user;

            console.log(state.user)
        },

        removeUser(state){
            state.user = null;
        }
    },
}
