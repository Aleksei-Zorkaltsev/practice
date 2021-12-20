<template>
    <div>
        <v-breadcrumbs
            :name="name"
            :user_category="user_category"
            :category="category"
            @click="resetSettings"
        ></v-breadcrumbs>
        <div class="productsMain container">
            <left-catalog-catagory
                :dataFilterProperty="dataFilterProperty">
            </left-catalog-catagory>
            <div>
                <catalog-filter></catalog-filter>
                <catalog-navbar></catalog-navbar>
                <catalog :products="products"></catalog>
                <pagination @click="getProducts"
                            :pagination="pagination">
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

    export default {

        name: "Main",
        data(){
            return{
                name: 'Catalog',
                //
                dataFilterProperty: {},
                products: [],
                pagination: {},
                //
                defaultPaginate: 3,
                defaultSort: 'product_name',
                //
                user_category: null,
                categories_id: null,
                brands_id: null,
                designers_id: null,
                category: null,
                brand: null,
                designer:null,
                current_show: null,
                current_sort: null,
            }
        },

        components:{
            'left-catalog-catagory': LeftCatalogCategory,
            'pagination': pagination,
            'catalog-navbar': catalogNavbar,
            'catalog': Catalog,
            'catalog-filter': FilterCatalog,
            'v-breadcrumbs': breadcrumbs,
        },

        mounted(){
            this.initCatalog();
        },

        watch: {
            $route(to, from) {

                if(to.path !== from.path || to.path === from.path && Object.keys(to.query).length === 0){
                    this.resetSettings();
                } else {
                    this.category = to.query.categories;
                }
                this.getProducts()
            }
        },

        computed: {

        },

        methods: {
            /**
             *  reset settings catalog
             */
            resetSettings(){
                this.categories_id = null
                this.brands_id = null
                this.designers_id = null
                this.category = null
                this.brand = null
                this.designer = null
                this.current_show =null
                this.current_sort = null
            },


            /**
             * @param url
             * Request Products and set Pagination
             */
            getProducts(url){
                console.log('getProducts')
                axios.get(this.buildApiRequest_Url(url))
                        .then(response => {
                            this.setPaginationValues(response.data);
                            this.addInProducts(response.data);
                        })
                    .catch(e => {
                        console.log(e)
                    })
            },

            /**
             *@param url
             * If url empty, build according to the settings catalog component
             * @return Api_Url
             */
            buildApiRequest_Url(url){
                if(url) return url;
                this.user_category = this.$route.path
                if (!this.current_show) this.current_show = this.defaultPaginate
                if (!this.current_sort) this.current_sort = this.defaultSort

                let build_url = `${location.origin}/Api/catalog
                    ${this.user_category}/
                    ${this.current_show}/
                    ${this.current_sort}/
                    ${this.categories_id}/
                    ${this.brands_id}/
                    ${this.designers_id}/
                `.replace(/\s+/g, '');
                return build_url;
            },

            /**
             * @param response
             * get response data and push in products
             */
            addInProducts(response){
                this.products = [];
                response.data.forEach((product)=>{
                    this.products.push(product)
                })
            },

            /**
             * @param response
             * get response and set Pagination values
             */
            setPaginationValues(values){
                this.pagination = {
                    prev_page: values.prev_page_url,
                    next_page: values.next_page_url,
                    current_page: values.current_page,
                    last_page: values.last_page_url,
                    first_page: values.first_page_url,
                    links: this.linksFiltered(values.links)
                }
            },

            /**
             * @param responseLinks pagination
             * @returns {*} - return object without @first and @last values. return pagination Links only with page numbers.
             * @first: "prev" link.
             * @last: "next" link.
             */
            linksFiltered(responseLinks){

                return responseLinks.filter((el, index) => (index !== 0) && !((responseLinks.length - 1) === index));
            },


            /**
             * Initialization Catalog when route to Catalog component
             */
            initCatalog(){
                this.user_category = this.$route.path
                let url = `${location.origin}/Api/catalog/init${this.user_category}/${this.defaultPaginate}/${this.defaultSort}/null/null/null/`;

                axios.get(url)
                    .then(response => {
                        console.log(response)

                        let arr = Object.entries(response.data.filterProperty)
                        arr.forEach((element)=>{
                            Vue.set(this.dataFilterProperty, element[0], {
                                name: element[0],
                                data: element[1]
                            })
                        })
                        if(response.data.products.prev_page_url) response.data.products.prev_page_url = response.data.products.prev_page_url.replace('catalog/init', 'catalog')
                        response.data.products.next_page_url = response.data.products.next_page_url.replace('catalog/init', 'catalog')
                        response.data.products.last_page_url = response.data.products.last_page_url.replace('catalog/init', 'catalog')
                        response.data.products.first_page_url = response.data.products.first_page_url.replace('catalog/init', 'catalog')
                        response.data.products.links.forEach( el => {
                            if(el.url) el.url = el.url.replace('catalog/init', 'catalog')
                        })
                        this.setPaginationValues(response.data.products);
                        this.addInProducts(response.data.products);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
    }
</script>

<style scoped>

</style>
