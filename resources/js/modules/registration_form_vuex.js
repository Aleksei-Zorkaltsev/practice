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
                            getUserApi().then()
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

    },
}
