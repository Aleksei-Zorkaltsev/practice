<template>
    <div class="catalog_items">
        <catalog-item v-for="product in products" :key="product.id"
                      :product_id="product.id"
                      :product_name="product.product_name"
                      :price="product.price"
                      :img="product.img"
        ></catalog-item>
    </div>
</template>

<script>
    import itemCatalog from "./ItemCatalog";

    export default {
        name: "catalog",
        props: ['products'],
        data(){
            return{}
        },
        components: {
            'catalog-item': itemCatalog,
        },
    }
</script>

<style scoped>

</style>
