<template>
    <div class="product_inCart">
        <div class="cartproduct_discription">
            <img src="imgSaleItems/cart/Layer_43.png" alt="prewCart">
            <div>
                <a href="#">Mango People T-shirt</a>
                <p>
                    Color: <span>Red</span><br>
                    Size: <span>Xll</span>
                </p>
            </div>
        </div>
        <div class="cart_price">
            $150
        </div>
        <input type="number" min="1" max="99" value="1" placeholder="0">
        <div class="cart_shipping">
            FREE
        </div>
        <div class="cart_subtotal_product">
            $300
        </div>
        <div class="cart_action">
            <a href=""><i class="fas fa-times-circle"></i></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductInCart"
    }
</script>

<style scoped>

</style>
