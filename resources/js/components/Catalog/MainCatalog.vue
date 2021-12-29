<template>
    <div>
        <v-breadcrumbs
            name="Catalog"
            :user_category="getUserCategory"
            :category="getStateCategory"
            @click="resetStateSettings"
        ></v-breadcrumbs>
        <div class="productsMain container">
            <left-catalog-category
                :dataFilterProperty="getFilterProperty">
            </left-catalog-category>
            <div class="catalog_right">
                <catalog-filter></catalog-filter>
                <catalog-navbar></catalog-navbar>
                <catalog :products="getStateProducts"></catalog>

                <pagination @click="getProducts"
                            :pagination="getStatePagination">
                </pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import pagination from './Pagination'
    import catalogNavbar from './CatalogNavBar'
    import LeftCatalogCategory from "./LeftCatalogCategory"
    import Catalog from "./Catalog"
    import FilterCatalog from "./FilterCatalog"
    import breadcrumbs from "../Breadcrumbs/MainBreadcrumbs"

    import { mapGetters, mapActions } from 'vuex';

    export default {

        name: "Main",
        components:{
            'left-catalog-category': LeftCatalogCategory,
            'pagination': pagination,
            'catalog-navbar': catalogNavbar,
            'catalog': Catalog,
            'catalog-filter': FilterCatalog,
            'v-breadcrumbs': breadcrumbs,
        },

        mounted(){
            Vue.nextTick(()=>{
                this.$store.dispatch('initCatalog')
            })
        },

        watch: {
            $route(to, from) {
                if(to.path !== from.path || to.path === from.path && Object.keys(to.query).length === 0){
                    this.$store.dispatch('resetStateSettings');
                    this.$store.commit('setUserCategory', to.path.replace("/", ""))

                } else {
                    this.$store.commit('changeCatalogCategory', to.query.categories);
                }
                this.$store.dispatch('getProducts')
            }
        },

        computed: mapGetters(['getFilterProperty', 'getUserCategory', 'getStateProducts', 'getStateCategory', 'getStatePagination']),
        methods: mapActions(['initCatalog', 'resetStateSettings', 'getProducts',])
    }
</script>

<style scoped>

</style>
