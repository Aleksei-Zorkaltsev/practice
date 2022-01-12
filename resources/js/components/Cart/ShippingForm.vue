<template>
    <div class="shippingAddress">
            <h2>SHIPPING ADDRESS</h2>
        <div v-if="!right_address">
            <select :value="country" @change="selectCountry($event)">
                <option>Bangladesh</option>
                <option>United States</option>
                <option>Russia</option>
                <option>Brazil</option>
                <option>Australia</option>
            </select>
            <p v-if="country_err" style="color:red">* You must select country</p>

            <input type="text" :value="state_value" placeholder="State" @input="updateState($event)">
            <p v-if="state_err" style="color:red">*this field must be required</p>

            <input type="text" :value="postcode" placeholder="PostCode/Zip" @input="updatePostCode($event)">
            <p v-if="postcode_err" style="color:red">*this field must be required</p>

            <button @click.prevent="checkRequiredShipping">GET A QUOTE</button>
        </div>
        <div v-else>
            <hr>
            <h2>ADDRESS ACCEPT</h2>
                country: {{ getCartShippingCountry }} <br>
                state: {{getCartShippingState}} <br>
                postcode: {{getCartShippingPostCode}}
            <hr>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: "ShippingForm",
        data(){
            return{
                right_address: null,
                country_err: null,
                state_err: null,
                postcode_err: null,
            }
        },
        computed: {
            ...mapState({
                country: state => state.cart_shipping_country,
                state_value: state => state.cart_shipping_state,
                postcode: state => state.cart_shipping_postcode,
            }),

            ...mapGetters(['getCartShippingCountry', 'getCartShippingState', 'getCartShippingPostCode']),
        },

        methods: {
            checkRequiredShipping(){
                this.state_err = null;
                this.postcode_err = null;
                this.country_err = null;
                this.right_address = null;

                if(!this.getCartShippingCountry){
                    this.country_err = true
                }
                if(!this.getCartShippingState){
                    this.state_err = true
                }
                if(!this.getCartShippingPostCode){
                    this.postcode_err = true
                }
                if(this.state_err || this.postcode_err || this.country_err){
                    return;
                } else {
                    this.right_address = true
                }
            },

            selectCountry(event){
                this.$store.commit('UPDATE_CART_SHIPPING_COUNTRY', event.target.value)
            },

            updateState(event){
                this.$store.commit('UPDATE_CART_SHIPPING_STATE', event.target.value)
            },

            updatePostCode(event){
                this.$store.commit('UPDATE_CART_SHIPPING_POSTCODE', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
