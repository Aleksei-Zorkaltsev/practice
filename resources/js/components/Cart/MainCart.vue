<template>
    <div class="cart_list">
        <div class="container">
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
                <button type="button">CLEAR SHOPPING CART</button>
                <a href="">CONTINUE SHOPPING</a>
            </div>
            <form class="cartShippingAdressForm" action="#">
                <div class="shippindAdress">
                    <h2>SHIPPING ADDRESS</h2>
                    <select>
                        <option value="bd">Bangladesh</option>
                        <option value="us">United States</option>
                        <option value="ru">Russia</option>
                        <option value="it">Brazil</option>
                        <option value="au">Australia</option>
                    </select>
                    <input type="text" placeholder="State">
                    <input type="text" placeholder="PostCode/Zip">
                    <button type="button">GET A QUOTE</button>
                </div>
                <div class="cart_CouponDiscount">
                    <h2>COUPON DISCOUNT</h2>
                    Enter your coupon code if you have one
                    <input type="text" placeholder="State">
                    <button type="button">APPLY COUPON</button>
                </div>
                <div class="cartGrandTotalSubmit">
                    <div>
                        SUB TOTAL <span>$ {{ getSubTotal }} </span>
                        <p>GRAND TOTAL <span class="grand_totalPrice">${{ getGrandTotal }}</span></p>
                        <button type="submit">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import productCart from './ProductInCart'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "MainCart",
        components: {
            'v-product-in-cart': productCart,
        },

        computed: mapGetters(['getCartProducts', 'getSubTotal', 'getGrandTotal']),
    }
</script>

<style scoped>

</style>
