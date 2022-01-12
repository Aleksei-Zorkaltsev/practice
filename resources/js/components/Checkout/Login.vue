<template>
    <form class="checkout_shipAd_right" action="#">
        <h3>Already register?</h3>
        <span>Please log in below</span>
        <h4>EMAIL ADDRESS <span>*</span></h4>
        <input type="email" :value="email" @input="updateEmail($event)">
        <h4>PASSWORD <span>*</span></h4>
        <input type="password" :value="password" @input="updatePassword($event)">
        <div v-if="getLoginError" class="checkout_warrning">* {{getLoginError}}</div>
        <div class="checkoutlogInForgot">
            <button @click.prevent="login('checkout')">Log in</button>
            <a class="aaaaa" href="#">Forgot Password ?</a>
        </div>
    </form>
</template>

<script>
    import {mapActions, mapGetters, mapState} from "vuex";

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
