<template>
    <div class="navbar_catalog">
        <navbar-unit v-for="feature in featured" :key="feature.name"
                     :feature-name="feature.name"
                     :list-choices="feature.list"
                     :feature-value="feature.value"
        ></navbar-unit>
    </div>
</template>

<script>
    import unitNavbar from "./CatalogNavBarUnit"

    export default {
        name: "CatalogNavBar",
        components: {
            'navbar-unit': unitNavbar,
        },
        data(){
            return{
                featured: [
                    {
                        name: 'Sort by',
                        value: 'sort',
                        list: ['Name', 'Price'],
                    },
                    {
                        name: 'Show',
                        value: 'show',
                        list: [3, 6, 9],
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
