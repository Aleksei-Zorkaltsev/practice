import vueRouter from "../VueRouter";
import { getUserApi } from "../services/getUserApi";

export default {
    state: {
        login_email: '',
        login_password: '',
        login_error: null
    },

    getters: {
        getLoginError(state){
            return state.login_error;
        }
    },
    actions: {
        login(context, way){

            axios.post('/Api/login', {
                    email: context.state.login_email,
                    password: context.state.login_password
                })
                .then(response => {
                    if(response.data.error) {
                        context.commit('SET_LOGIN_ERROR', response.data.error)
                    } else {
                        getUserApi().then(user => {
                            context.commit('SET_LOGIN_ERROR', null)
                            context.dispatch('setStoreUser', user);
                            context.dispatch('initCart');
                            vueRouter.push(`/${way}`)
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },

    mutations: {

        SET_LOGIN_ERROR(state, err){
            state.login_error = err
        },

        LOGIN_FORM_EMAIL_UPDATE(state, email){
            state.login_email = email;
        },

        LOGIN_FORM_PASSWORD_UPDATE(state, password){
            state.login_password = password
        },
    }
}
