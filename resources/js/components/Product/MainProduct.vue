<template>
    <div>
        <v-breadcrumbs></v-breadcrumbs>
        <div v-if="getProduct">
            <div class="single_prew">
                <img v-if="getProduct.img" :src="`../storage/${getProduct.img}`" alt="">
                <img v-else :src="`../storage/img/Layer_42.png`" alt="img">
            </div>
            <div class="single_infoItem">
                <div class="single_ContainerInfo">
                    <h2>{{ getProduct.user_category }} COLLECTION</h2>
                    <div class="decorationline_infoItem">
                        <div class="decorationline_red"></div>
                    </div>
                    <h3>{{ getProduct.product_name }}</h3>
                    <p v-if="getProduct.describe"> {{ getProduct.describe }} </p>
                    <p v-else>No describes</p>
                    <div class="single_spectfic_Item">
                        <div class="spectficItem_characteristic">
                            MATERIAL:
                            <span v-if="getProduct.material"> {{ getProduct.material }} </span>
                            <span v-else> not specified </span>
                        </div>
                        <div class="spectficItem_characteristic">

                            DESIGNER:
                            <span v-if="getProduct.designer"> {{ getProduct.designer }} </span>
                            <span v-else>{{ getProduct.designer }}</span>
                        </div>
                    </div>
                    <h4>${{ getProduct.price }}</h4>
                    <form action="#">
                        <div class="single_Choices_Item">
                            <v-color-picker></v-color-picker>
                            <v-size-picker></v-size-picker>
                            <v-quantity-picker></v-quantity-picker>
                        </div>
                        <button class="buttonAddtoCartSingle" @click.prevent=""><img :src="`../storage/img/Forma_1_copy.png`" alt="cart">Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductBreadcrumbs from "../Breadcrumbs/ProductBreadcrumbs";
    import ColorPicker from "./ColorPicker";
    import SizePicker from "./SizePicker";
    import QuantityPicker from "./QuantityPicker"
    import { mapActions, mapGetters } from 'vuex'


    export default {
        name: "MainProduct",
        components: {
            'v-breadcrumbs': ProductBreadcrumbs,
            'v-color-picker': ColorPicker,
            'v-size-picker': SizePicker,
            'v-quantity-picker': QuantityPicker
        },
        computed: mapGetters(['getProduct']),
        methods: mapActions(['getApiProduct']),

        mounted(){
            let id = this.$route.params.pathMatch.replace('/','');
            this.$store.dispatch('getApiProduct', id);
        }
    }
</script>

<style scoped>

</style>
