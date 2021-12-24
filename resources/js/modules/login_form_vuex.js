import vueRouter from "../VueRouter";
import { getUserApi } from "../services/getUserApi";

export default {
    state: {
        login_email: '',
        login_password: '',
    },

    actions:{
        async login(context){
            axios.post('/Api/login', {
                    email: context.state.login_email,
                    password: context.state.login_password
                })
                .then(response => {
                    getUserApi().then(user => {
                        context.commit('setUser', user);
                        vueRouter.push('account')
                    })
                })
                    .catch(err => {
                        console.log(err)
                })
        },
    },

    mutations: {

        loginEmailUpdate(state, email){
            state.login_email = email;
        },

        loginPasswordUpdate(state, password){
            state.login_password = password
        },
    }
}
