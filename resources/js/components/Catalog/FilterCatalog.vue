<template>
    <div v-if="show" class="tr-size-priseBox">
        <traiding-now></traiding-now>
        <sizes-checkboxes></sizes-checkboxes>
        <price-range></price-range>
    </div>
</template>

<script>
    import traidingNow from "./TraidingNow";
    import sizeCheboxes from "./SizeCheckBoxes";
    import priceRange from "./PriceRange";

    export default {
        name: "FilterCatalog",

        data(){
            return{
                show: false
            }
        },
        components: {
            'traiding-now': traidingNow,
            'sizes-checkboxes' : sizeCheboxes,
            'price-range': priceRange,
        }
    }
</script>

<style scoped>

</style>
