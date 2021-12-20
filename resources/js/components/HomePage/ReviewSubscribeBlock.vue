<template>
    <div class="review">
        <div class="container reviewSpacing">
            <v-review></v-review>
            <div class="vertical_whitelineRew"></div>
            <v-subscribe></v-subscribe>
        </div>
    </div>
</template>

<script>
    import review from "./Review";
    import subscribe from "./Subscribe"

    export default {
        name: "ReviewSubscribeBlock",
        components: {
            'v-review': review,
            'v-subscribe': subscribe,
        }

    }
</script>

<style scoped>

</style>
