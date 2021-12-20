<template>
    <div class="container offer30Block">
        <div class="offerLeftSideBlock">
            <div class="textOfferGirlImg">
                30% <span> OFFER</span>
                <div>FOR WOMEN</div>
            </div>
        </div>
        <div class="service">
            <div class="servicePoint">
                <img :src="free_delivery_icon" alt="img">
                <div>
                    <h2>Free Delivery</h2>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div class="servicePoint">
                <img :src="sales_discounts_icon" alt="img">
                <div>
                    <h2>Sales &amp; discounts</h2>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div class="servicePoint">
                <img :src="quality_assurance_icon" alt="img">
                <div>
                    <h2>Quality assurance</h2>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Offer",

        data(){
            return{
                free_delivery_icon: '../storage/img/icon/offerDetails1.png',
                sales_discounts_icon: '../storage/img/icon/offerDetails2.png',
                quality_assurance_icon: '../storage/img/icon/offerDetails3.png',
            }
        }
    }
</script>

<style scoped>

</style>
