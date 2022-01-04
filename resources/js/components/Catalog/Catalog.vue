<template>
    <div class="catalog_items">
        <catalog-item v-if="products" v-for="product in products" :key="product.id"
                      :product_id="product.id"
                      :product_name="product.product_name"
                      :price="product.price"
                      :img="product.img"
        ></catalog-item>
        <p v-else> No result </p>
    </div>
</template>

<script>
    import itemCatalog from "./ItemCatalog";

    export default {
        name: "catalog",
        props: ['products'],
        components: {
            'catalog-item': itemCatalog,
        },
    }
</script>

<style scoped>

</style>
