<template>
    <div class="item" :data-id="product_id">
        <div class="prewiewITemImage">
            <div class="hoverItem">
                <router-link :to="`products/${product_id}`" class="AddCart"> Details </router-link>
            </div>
            <img class="preview_img_item" v-if="img" :src="setImg(img)" alt="prew">
            <img class="preview_img_item" v-else :src="getDefaultCatalogImg" alt="default">
        </div>
        <h3 class="nameItem"><router-link :to="`products/${product_id}`">{{ product_name }}</router-link></h3>
        <div class="price">{{ price }}</div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "ItemProduct",
        props: ['product_name', 'price', 'img', 'product_id'],

        computed: mapGetters(['getDefaultCatalogImg']),

        methods:{
            setImg(img){
                return `../storage/${img}`;
            },
        }

    }
</script>

<style scoped>

</style>
