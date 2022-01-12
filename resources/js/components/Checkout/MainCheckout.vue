<template>
    <div class="checkout_main">
        <div class="container">
            <div v-if="!getStateUser">
                <div class="card checkoutUnit">
                    <div>
                        <div class="checkoutFormsShipAdress">

                            <v-login-checkout></v-login-checkout>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CheckoutLogin from './Login'


    export default {
        name: "MainCheckout",

        components:{
            'v-login-checkout': CheckoutLogin,
        },

        computed: mapGetters(['getStateUser']),
    }
</script>

<style scoped>

</style>
