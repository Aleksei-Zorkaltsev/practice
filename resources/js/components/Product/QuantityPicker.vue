<template>
    <div class="single_ChoiseUser">
        <h3>QUANTITY</h3>
        <input type="number" min="1"  :value="getQuantity" max="99" @change="updateQuantity($event)">
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "QuantityPicker",

        computed: mapGetters(['getQuantity']),

        methods: {
            updateQuantity(e){
                if (e.target.value <= 0) { e.target.value = 1 }
                else if (e.target.value > 99) { e.target.value = 99 }

                this.$store.dispatch('UPDATE_PRODUCT_QUANTITY', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>
