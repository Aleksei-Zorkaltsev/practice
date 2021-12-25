<template>
    <div class="authForm">
        <div v-if="!reg_complete">
            <h3>REGISTRATION</h3>
            <h4>LOGIN<span>*</span></h4>
            <input type="text"  :value="name" @input="updateName">
            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="email" :value="email" @inpit="updateEmail">
            <h4>PASSWORD <span>*</span></h4>
            <input type="password" :value="password" @inpit="updatePassword">
            <h4>CONFIRM PASSWORD <span>*</span></h4>
            <input type="password" :value="password_confirm" @inpit="updatePasswordConfirm">
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
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Main",
        data(){
            return{
                reg_complete: false,
                timer: 2
            }
        },
        computed: {
            ...mapState({
                name: state => state.registry_name,
                email: state => state.registry_email,
                password: state => state.registry_password,
                password_confirm: state => state.registry_password_confirm,
            }),

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
            ...mapActions(['registration']),

            updateName(e){
                this.$store.commit('registrationNameUpdate', e.target.value)
            },
            updateEmail(e){
                this.$store.commit('registrationEmailUpdate', e.target.value)
            },
            updatePassword(e){
                this.$store.commit('registrationPasswordUpdate', e.target.value)
            },
            updatePasswordConfirm(e){
                this.$store.commit('registrationPasswordConfirmUpdate', e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
