<template>
    <div class="authForm">
        <div v-if="!reg_complete">
            <h3>REGISTRATION</h3>
            <h4>LOGIN<span>*</span></h4>
            <input type="text"  v-model="form.name">
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="email" v-model="form.email">
            <h4>PASSWORD <span>*</span></h4>
            <input type="password" v-model="form.password">
            <h4>CONFIRM PASSWORD <span>*</span></h4>
            <input type="password" v-model="form.password_confirmation">
<!--            <div>* Required Fileds</div>-->
            <div class="button_login_or_forgot">
                <button @click.prevent="sendForm">REGISTRY</button>
            </div>
        </div>
        <div v-else>
            <h3>Registration complete</h3>
            <p>You will redirect to login ...{{ timerRedirect }}</p>
        </div>
    </div>
</template>

<script>
    import vueRouter from "../../VueRouter";
    import {getUserApi} from "../../services/getUserApi";

    export default {
        name: "Main",
        data(){
            return{
                form: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: [],
                reg_complete: false,
                timer: 2
            }
        },
        computed: {
            timerRedirect(){
                if(this.timer === 0) {
                    vueRouter.push('account')
                }
                setTimeout(()=>{
                    this.timer--;
                },1000)
                return this.timer;
            }
        },
        methods: {
            async sendForm(){
                axios.post('/Api/register', this.form)
                    .then(response => {
                        axios.post('/Api/login', {name: this.name, email: this.email})
                            .then(res => {
                                getUserApi().then(res => {this.reg_complete = true})
                            })
                            .catch(err=> {
                                console.log(err)
                            })
                    })
                    .catch(err => {
                        this.errors = err.response.data.errors
                    })
            }
        }
    }
</script>

<style scoped>

</style>
