<template>
    <div class="checkout_main">
        <div class="container">
            <div v-if="!getStateUser">
                <div class="card checkoutUnit">
                    <div>
                        <div class="checkoutFormsShipAdress">
                            <form class="checkout_shipAd_left">
                                <h3>Check as a guest or register</h3>
                                <span>Register with us for future convenience</span>
                                <div class="radioButtonBlock">
                                    <div>
                                        <input class="radio" type="radio" name="radioCheck"> CHECKOUT AU GUEST
                                    </div>
                                    <div>
                                        <input class="radio" type="radio" name="radioCheck"> REGISTER
                                    </div>
                                </div>
                                <h3>register and save time!</h3>
                                <span>Register with us for future convenience</span>
                                <br>
                                <span>
                                    &raquo; Fast and easy checkout<br>
                                    &raquo; Easy access to your order history and status
                                </span>
                                <button type="submit">Continue</button>
                            </form>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex'


    export default {
        name: "MainCheckout",

        computed: {
            ...mapState({
                email: state => state.login_email,
                password: state => state.login_password
            }),

            ...mapGetters(['getLoginError', 'getStateUser']),
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
