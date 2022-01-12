<template>
    <div class="navbar_catalog">
        <navbar-unit v-for="feature in getCatalogNavbarFeatured" :key="feature.name"
                     :feature-name="feature.name"
                     :list-choices="feature.list"
                     :feature-value="feature.value"
        ></navbar-unit>
    </div>
</template>

<script>
    import unitNavbar from './CatalogNavBarUnit'
    import { mapGetters } from 'vuex'

    export default {
        name: "CatalogNavBar",
        components: {
            'navbar-unit': unitNavbar,
        },
        computed: mapGetters(['getCatalogNavbarFeatured']),
    }
</script>

<style scoped>

</style>
