<template>
    <div class="cart-content-table">
        <div class="cart_namesdetail">
            <p>Product Details</p>
            <p>unite Price</p>
            <p>Quantity</p>
            <p>shipping</p>
            <p>Subtotal</p>
            <p>ACTION</p>
        </div>
        <div v-if="getCartProducts" >
            <v-product-in-cart v-for="item in getCartProducts" :key="item.id"
                               :item_id="item.id"
                               :color="item.color"
                               :size="item.size"
                               :quantity="item.quantity"
                               :price="item.product.price"
                               :name="item.product.product_name"
                               :img="item.product.img"
            ></v-product-in-cart>
        </div>
        <h3 v-else style="text-align: center"> CART EMPTY </h3>

        <div class="cartResetAndContinue">
            <button v-if="getCartProducts" @click.prevent="clearCart">CLEAR SHOPPING CART</button>
            <button v-else disabled class="inactive-cart-button">CLEAR SHOPPING CART</button>
            <router-link to="/">CONTINUE SHOPPING</router-link>
        </div>
    </div>
</template>

<script>
    import productCart from "./ProductInCart";
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "CartContent",

        components: {
            'v-product-in-cart': productCart,
        },
        computed: mapGetters(['getCartProducts']),
        methods: mapActions(['clearCart']),

    }
</script>

<style scoped>

</style>
