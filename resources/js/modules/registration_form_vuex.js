import vueRouter from "../VueRouter";
import {getUserApi} from "../services/getUserApi";

export default {
    state: {
        registry_name: null,
        registry_email: null,
        registry_password: null,
        registry_password_confirm: null,
    },
    getters: {

    },
    actions: {
        async registration(context){

            axios.post('/Api/register', {
                name: context.state.registry_name,
                email: context.state.registry_email,
                password: context.state.registry_password,
                password_confirmation: context.state.registry_password_confirm,
            }).then(response => {
                    axios.post('/Api/login', {
                        name: context.state.registry_name,
                        email: context.state.registry_email
                    }).then(res => {
                            getUserApi().then((user) => {
                                context.commit('SET_USER', user);
                                vueRouter.push('account')
                            })
                        })
                        .catch(err=> {
                            console.log(err)
                        })
                })
                .catch(err => {
                    this.errors = err.response.data.errors
                })
        }
    },
    mutations: {
        REGISTRATION_FORM_NAME_UPDATE(state, name){
            state.registry_name = name;
        },

        REGISTRATION_FORM_EMAIL_UPDATE(state, email){
            state.registry_email = email
        },

        REGISTRATION_FORM_PASSWORD_UPDATE(state, pass){
            state.registry_password = pass
        },

        REGISTRATION_FORM_PASSWORD_CONFIRM_UPDATE(state, pass_confirm){
            state.registry_password_confirm = pass_confirm

        },
    },
}
