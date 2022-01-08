<template>
    <div class="authForm container">
        <br>
        <h4 v-if="getLoginError" style="color: red"> * {{ getLoginError }}</h4>
        <h3>LOGIN</h3>
        <h4>EMAIL ADDRESS</h4>
        <input type="email" :value="email" @input="updateEmail">
        <h4>PASSWORD</h4>
        <input type="password" :value="password" @input="updatePassword">
        <div class="button_login_or_forgot">
            <button @click.prevent="login">LOGIN</button>
            <a href="#">Forgot Password ?</a>
        </div>
        <br>
    </div>
</template>

<script>

    import { mapActions, mapState, mapGetters } from "vuex"

    export default {
        name: "Login",

        computed: {
            ...mapState({
                email: state => state.login_email,
                password: state => state.login_password
            }),
            ...mapGetters(['getLoginError']),

        },
        methods: {
            ...mapActions(['login']),

            updateEmail(e){
                this.$store.commit('LOGIN_FORM_EMAIL_UPDATE', e.target.value)
            },
            updatePassword(e){
                this.$store.commit('LOGIN_FORM_PASSWORD_UPDATE', e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
