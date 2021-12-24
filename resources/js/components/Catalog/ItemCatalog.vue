<template>
    <div class="item" :data-id="product_id">
        <div class="prewiewITemImage">
            <div class="hoverItem">
                <a href="#" class="AddCart"><img class="AddCartimg" :src="addCart_icon" alt="cart"> Add to Cart</a>
            </div>
            <img class="preview_img_item" v-if="img" :src="setImg(img)" alt="prew">
            <img class="preview_img_item" v-else :src="defaultImg" alt="default">
        </div>
        <h3 class="nameItem"><a href="#">{{ product_name }}</a></h3>
        <div class="price">{{ price }}</div>
    </div>
</template>

<script>
    export default {
        name: "ItemProduct",
        props: ['product_name', 'price', 'img', 'product_id'],

        data(){
            return{
                addCart_icon: '../storage/img/icon/addToCart.png',
                defaultImg: '../storage/img/def_Product.jpg',
            }
        },

        methods:{

            setImg(img){
                return `../storage/${img}`;
            },
        }

    }
</script>

<style scoped>

</style>
