<template>
    <div>
        <v-preview></v-preview>
        <v-offer-categories></v-offer-categories>
        <v-special-offer></v-special-offer>
        <v-rev-sub></v-rev-sub>
    </div>
</template>

<script>
    import rev_sub from "./ReviewSubscribeBlock";
    import offerCategories from "./OfferCategories"
    import preview from "./Preview"
    import offer from "./SpecialOffer"

    export default {
        name: "Home",
        components:{
            'v-rev-sub': rev_sub,
            'v-preview': preview,
            'v-offer-categories': offerCategories,
            'v-special-offer': offer,
        }
    }
</script>

<style scoped>

</style>
