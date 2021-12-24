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
                    <h2>{{ getProduct.user_category.toUpperCase() }} COLLECTION</h2>
                    <div class="decorationline_infoItem">
                        <div class="decorationline_red"></div>
                    </div>
                    <h3>{{ getProduct.product_name }}</h3>
                    <p> describe </p>
                    <div class="single_spectfic_Item">
                        <div class="spectficItem_characteristic">
                            MATERIAL: <span> not specified </span>
                        </div>
                        <div class="spectficItem_characteristic">
                            DESIGNER: <span>{{ getProduct.designer }}</span>
                        </div>
                    </div>
                    <h4>${{ getProduct.price }}</h4>
                    <form action="#">
                        <div class="single_Choices_Item">
                            <div class="single_ChoiseUser">
                                <div class="selectColorPrew"></div>
                                <h3>CHOOSE COLOR</h3>
                                <select class="single_userColor">
                                    <option>Red</option>
                                    <option>Black</option>
                                    <option>White</option>
                                </select>
                            </div>
                            <div class="single_ChoiseUser">
                                <h3>CHOOSE SIZE</h3>
                                <select class="single_userSize">
                                    <option>XXL</option>
                                    <option>XL</option>
                                    <option>L</option>
                                    <option>M</option>
                                    <option>S</option>
                                </select>
                            </div>
                            <div class="single_ChoiseUser">
                                <h3>QUANTITY</h3>
                                <input type="number" min="1" value="1" max="9">
                            </div>
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
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "MainProduct",
        components: {
            'v-breadcrumbs': ProductBreadcrumbs,
        },
        computed: mapGetters(['getProduct']),
        methods: mapActions(['getApiProduct']),

        mounted(){
            let id = this.$route.params.pathMatch.replace('/','');
            this.getApiProduct(id)
        }

    }
</script>

<style scoped>

</style>
