<template>
    <div class="authForm">
        <h3>LOGIN</h3>
        <h4>EMAIL ADDRESS <span>*</span></h4>
        <input type="email" v-model="form.email">
        <h4>PASSWORD <span>*</span></h4>
        <input type="password" v-model="form.password">
        <!--            <div>* Required Fileds</div>-->
        <div class="button_login_or_forgot">
            <button @click.prevent="login">LOGIN</button>
            <a href="#">Forgot Password ?</a>
        </div>
    </div>
</template>

<script>
    import vueRouter from "../../vueRouter";
    import { getUser } from './../../services/getUser';

    export default {
        name: "Login",
        props: ['user'],
        data(){
            return{
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        methods:{
            login(){
                axios.post('/Api/login', this.form)
                    .then(response => {
                        console.log(response);
                        getUser().then(res => {
                            GLOBAL_STORE.user = res.data;
                            vueRouter.push('account')
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        // beforeCreate(){
        //     if(!this.$root.user){
        //         this.$root.getUser().then(response => {
        //             if(this.$root.user) vueRouter.push('account')
        //         })
        //     }
        // },
    }
</script>

<style scoped>

</style>
