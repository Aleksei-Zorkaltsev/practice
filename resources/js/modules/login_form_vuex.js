import vueRouter from "../VueRouter";
import { getUserApi } from "../services/getUserApi";

export default {
    state: {
        login_email: '',
        login_password: '',
    },

    actions:{
        login(context){
            axios.post('/Api/login', {
                    email: context.state.login_email,
                    password: context.state.login_password
                })
                .then(response => {
                    getUserApi().then(user => {
                        context.dispatch('setStoreUser', user);
                        vueRouter.push('/')
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },

    mutations: {

        LOGIN_FORM_EMAIL_UPDATE(state, email){
            state.login_email = email;
        },

        LOGIN_FORM_PASSWORD_UPDATE(state, password){
            state.login_password = password
        },
    }
}
