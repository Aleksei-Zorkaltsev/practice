<template>
    <div class="accordionBlockCatalog">
        <div class="accordion" id="accordionExample">
            <nav-catalog-filter v-for="property in dataFilterProperty" :key="property.name"
                                :name="property.name"
                                :data="property.data"
            ></nav-catalog-filter>
        </div>
    </div>
</template>

<script>
    import navPosition from "./LeftCatalogCategoryPosition"

    export default {
        name: "LeftCatalogNav",
        props: ['dataFilterProperty'],
        components: {
            'nav-catalog-filter': navPosition,
        },
    }
</script>

<style scoped>

</style>
