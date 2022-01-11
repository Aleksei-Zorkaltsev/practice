<template>
    <div class="cartGrandTotalSubmit">
        <div>
            SUB TOTAL <span>$ {{ getSubTotal }} </span>
            <p>GRAND TOTAL <span class="grand_totalPrice">${{ getGrandTotal }}</span></p>
            <router-link  v-if="getCartProducts" to="/checkout">PROCEED TO CHECKOUT</router-link>
            <a v-else class="inactive-cart-button">PROCEED TO CHECKOUT</a>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CartCheckout",

        computed: mapGetters(['getSubTotal', 'getGrandTotal', 'getCartProducts']),
    }
</script>

<style scoped>

</style>
