<template>
    <div class="cart_list">
        <div class="container">
            <v-cart-content></v-cart-content>
            <div class="cartShippingAddressForm">
                <v-cart-coupon></v-cart-coupon>
                <v-cart-checkout></v-cart-checkout>
            </div>
        </div>
    </div>
</template>

<script>

    import CartContent from "./CartContent";
    import ShippingForm from "./ShippingForm";
    import CouponDiscount from "./CouponDiscount";
    import CartCheckout from "./CartCheckout";

    export default {
        name: "MainCart",
        components: {
            'v-cart-content': CartContent,
            'v-cart-shipping': ShippingForm,
            'v-cart-coupon': CouponDiscount,
            'v-cart-checkout': CartCheckout,
        },
    }
</script>

<style scoped>

</style>
