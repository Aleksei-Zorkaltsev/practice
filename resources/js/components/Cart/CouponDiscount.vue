<template>
    <div class="cart_CouponDiscount">
        <h2>COUPON DISCOUNT</h2>
        <div v-if="!getCouponAccept">
            <p>Enter your coupon code if you have one</p>
            <input :value="coupon" type="text" placeholder="State" @input="updateCoupon($event)">
            <p v-if="getCouponError" style="color:red">*{{ getCouponError }}</p>
            <button @click.prevent="useCoupon">APPLY COUPON</button>
        </div>
        <div class="cart-coupon-discount" v-else>
            <hr>
            <h3>COUPON VALID</h3>
            <h2>ACTION: {{ getDiscountName }} </h2>
            <h2 style="color:green">You get {{ getDiscountValue }}% discount.</h2>
            <hr>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex'

    export default {
        name: "CouponDiscount",
        computed: {
            ...mapState({
                coupon: state => state.cart_coupon,
            }),
            ...mapGetters(['getCouponError', 'getCouponAccept', 'getDiscountValue', 'getDiscountName'])
        },
        methods: {
            ...mapActions(['useCoupon']),

            updateCoupon(event){
                this.$store.commit('UPDATE_CART_COUPON', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
