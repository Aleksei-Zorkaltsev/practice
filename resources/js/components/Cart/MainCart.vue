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
            <v-product-in-cart></v-product-in-cart>

            <div class="cartResetAndContinue">
                <button type="button">CLEAR SHOPPING CART</button>
                <a href="">CONTINUE SHOPPING</a>
            </div>
            <form class="cartShippingAdressForm" action="#">
                <div class="shippindAdress">
                    <h2>SHIPPING ADRESS</h2>
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
                        SUB TOTAL <span>$900</span>
                        <p>GRAND TOTAL <span class="grand_totalPrice">$900</span></p>
                        <button type="submit">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import productCart from './ProductInCart'

    export default {
        name: "MainCart",
        components: {
            'v-product-in-cart': productCart,
        }
    }
</script>

<style scoped>

</style>
