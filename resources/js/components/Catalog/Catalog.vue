<template>
    <div class="catalog_items">
        <product-item v-for="product in products" :key="product.id"
                      :product_id="product.id"
                      :product_name="product.product_name"
                      :price="product.price"
                      :img="product.img"
        ></product-item>
    </div>
</template>

<script>
    import itemProduct from "./ItemProduct";

    export default {
        name: "catalog",
        props: ['products'],
        data(){
            return{}
        },
        components: {
            'product-item': itemProduct,
        },
    }
</script>

<style scoped>

</style>
