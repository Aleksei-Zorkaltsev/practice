<template>
    <div class="categories">
        <div class="container contanerCategories">
            <div class="hotdeal">
                <router-link to="/man" class="whiteboxCattegories">
                    HOT DEAL
                    <div>FOR MEN</div>
                </router-link>
            </div>
            <div class="newArriwals">
                <router-link to="/kids" class="whiteboxCattegories">
                    NEW ARRIVALS
                    <div>FOR KIDS</div>
                </router-link>
            </div>
            <div class="offer30">
                <router-link to="/woman" class="whiteboxCattegories">
                    30% OFFER
                    <div>WOMEN</div>
                </router-link>
            </div>
            <div class="luxious">
                <router-link to="/accesories" class="whiteboxCattegories">
                    LUXIROUS &amp; TRENDY
                    <div>ACCESORIES</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OfferCategories"
    }
</script>

<style scoped>

</style>
