<template>
    <div class="authForm container">
        <br>
        <div>
            <h3>REGISTRATION</h3>
            <h4>LOGIN<span>*</span></h4>
            <input type="text"
                   :value="name"
                   @input="updateName">

            <h4>EMAIL ADDRESS <span>*</span></h4>
            <input type="email"
                   :value="email"
                   @input="updateEmail">

            <h4>PASSWORD <span>*</span></h4>
            <input type="password"
                   :value="password"
                   @input="updatePassword">

            <h4>CONFIRM PASSWORD <span>*</span></h4>
            <input type="password"
                   :value="password_confirm"
                   @input="updatePasswordConfirm">

<!--            <div>* Required Fileds</div>-->
            <div class="button_login_or_forgot">
                <button @click.prevent="registration">REGISTRY</button>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex';

    export default {
        name: "Main",
        computed: {
            ...mapState({
                name: state => state.registry_name,
                email: state => state.registry_email,
                password: state => state.registry_password,
                password_confirm: state => state.registry_password_confirm,
            }),
        },
        methods: {
            ...mapActions(['registration']),

            updateName(e){
                this.$store.commit('REGISTRATION_FORM_NAME_UPDATE', e.target.value)
            },
            updateEmail(e){
                this.$store.commit('REGISTRATION_FORM_EMAIL_UPDATE', e.target.value)
            },
            updatePassword(e){
                this.$store.commit('REGISTRATION_FORM_PASSWORD_UPDATE', e.target.value)
            },
            updatePasswordConfirm(e){
                this.$store.commit('REGISTRATION_FORM_PASSWORD_CONFIRM_UPDATE', e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
