import vueRouter from "../VueRouter";

export default {
    state: {
        user: null,
        is_admin: false,
    },
    getters: {

        getStateUser(state){
            return state.user
        },

        getIsAdmin(state){
            return state.is_admin
        }

    },
    actions: {

        setStoreUser(ctx, auth_user){
            if (auth_user) {
                ctx.commit('SET_USER', auth_user)
                ctx.dispatch('check_isAdmin')
            };
        },

        check_isAdmin(ctx){
            axios.get(`${location.origin}/Api/admin_status`).then(response => {
                if (response.data.status) {
                    ctx.commit('SET_ADMIN')
                }
            }).catch(err => {
                console.log(err)
            })
        },

        async logout(context){
            axios.post(`${location.origin}/Api/logout`)
                .then(response => {
                    context.commit('REMOVE_USER');
                    context.commit('UNSET_ADMIN');
                    if(vueRouter.app.$route.path !== '/') vueRouter.push('/')
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mutations: {

        UNSET_ADMIN(state){
            state.is_admin = false
        },

        SET_ADMIN(state){
            state.is_admin = true
        },

        SET_USER(state, user){
            state.user = user;
        },

        REMOVE_USER(state){
            state.user = null;
        }
    },
}
