<template>
    <div class="product_inCart">
        <div class="cartproduct_discription">
            <img v-if="img" :src="`../storage/${img}`" alt="">
            <img v-else :src="getDefaultCatalogImg" alt="prewCart">
            <div>
                <a href="#">{{ name }}</a>
                <p>
                    Color: <span>{{ color }}</span><br>
                    Size: <span>{{ size }}</span>
                </p>
            </div>
        </div>
        <div class="cart_price">
            ${{price}}
        </div>
        <input type="number" min="1" max="99" :value="quantity" @change="setQuantity($event, item_id)" placeholder="0">
        <div class="cart_shipping">
            FREE
        </div>
        <div class="cart_subtotal_product">
            ${{ subTotal }}
        </div>
        <div class="cart_action">
            <button @click.prevent="deleteCartProduct(item_id)"><i class="fas fa-times-circle"></i></button>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: "ProductInCart",
        props: ['item_id', 'color', 'size' , 'quantity' , 'price' , 'name' ,'img'],


        computed: {
            ...mapGetters(['getDefaultCatalogImg']),

            subTotal(){
                return this.quantity * this.price
            }
        },
        methods: {

            ...mapActions(['changeProductCartQuantity', 'deleteCartProduct']),

            setQuantity(event, id){
                if (event.target.value <= 0) { event.target.value = 1 }
                else if (event.target.value > 99) { event.target.value = 99 }

                console.log(id)
                this.changeProductCartQuantity({
                    id: id,
                    value: +event.target.value
                })
            }
        }
    }
</script>

<style scoped>

</style>
