<template>
    <div class="authForm">
        <h3>LOGIN</h3>
        <h4>EMAIL ADDRESS <span>*</span></h4>
        <input type="email" :value="email" @input="updateEmail">
        <h4>PASSWORD <span>*</span></h4>
        <input type="password" :value="password" @input="updatePassword">
        <div class="button_login_or_forgot">
            <button @click.prevent="login">LOGIN</button>
            <a href="#">Forgot Password ?</a>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from "vuex"

    export default {
        name: "Login",

        computed: {
            ...mapState({
                email: state => state.login_email,
                password: state => state.login_password
            })
        },
        methods: {
            ...mapActions(['login']),

            updateEmail(e){
                this.$store.commit('loginEmailUpdate', e.target.value)
            },

            updatePassword(e){
                this.$store.commit('loginPasswordUpdate', e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>
