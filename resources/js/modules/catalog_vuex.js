import vueRouter from "../VueRouter";

export default {
    state: {
        catalog_products: null,
        catalog_dataFilterProperty: {},
        catalog_pagination: {},
        catalog_defaultPaginate: 3,
        catalog_defaultSort: 'product_name',
        catalog_user_category: null,
        catalog_categories_id: null,
        catalog_brands_id: null,
        catalog_designers_id: null,
        catalog_category: null,
        catalog_brand: null,
        catalog_designer:null,
        catalog_current_show: null,
        catalog_current_sort: null,
        catalog_request_url: null,
        catalog_navbarFeatured: [
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
        ],
    },
    getters: {
        getUserCategory(state) {
            return state.catalog_user_category;
        },
        getFilterProperty(state) {
            return state.catalog_dataFilterProperty;
        },
        getStateProducts(state) {
            return state.catalog_products;
        },
        getStateCategory(state) {
            return state.catalog_category;
        },
        getStatePagination(state) {
            return state.catalog_pagination;
        },
        getCatalogNavbarFeatured(state){
            return state.catalog_navbarFeatured;
        }
    },
    actions: {

        resetStateSettings(ctx){
            ctx.commit('defaultSettings');
        },

        getProducts(ctx, url){

            if(url) { ctx.commit('setRequestUrl', url) }
            else { ctx.dispatch('buildApiRequest_Url') }

            axios.get(ctx.state.catalog_request_url)
                .then(response => {
                    ctx.commit('setPaginationValues', response.data);
                    ctx.commit('addInProducts', response.data);
                    ctx.commit('setRequestUrl', null)
                })
                .catch(e => {
                    console.log(e)
                })
        },

        buildApiRequest_Url(ctx){
            if (!ctx.state.catalog_current_show) ctx.state.catalog_current_show = ctx.state.catalog_defaultPaginate
            if (!ctx.state.catalog_current_sort) ctx.state.catalog_current_sort = ctx.state.catalog_defaultSort
            let complete_Url = `${location.origin}/Api/catalog
                            ${ctx.rootState.routeModule.route.path}/
                            ${ctx.state.catalog_current_show}/
                            ${ctx.state.catalog_current_sort}/
                            ${ctx.state.catalog_categories_id}/
                            ${ctx.state.catalog_brands_id}/
                            ${ctx.state.catalog_designers_id}/`.replace(/\s+/g, '');

            ctx.commit('setRequestUrl', complete_Url)
        },

        initCatalog(ctx){
            if(Object.keys(ctx.rootState.routeModule.route.query).length){
                vueRouter.push(ctx.rootState.routeModule.route.path);
            }

            ctx.commit('setUserCategory', ctx.rootState.routeModule.route.path.replace('/',''));

            let initUrl  = `${location.origin}/Api/catalog/init
                            ${ctx.rootState.routeModule.route.path}/
                            ${ctx.state.catalog_defaultPaginate}/
                            ${ctx.state.catalog_defaultSort}/
                            null/null/null/`.replace(/\s+/g, "");

            axios.get(initUrl)
                .then(response => {
                    ctx.commit('setFilterProperties', response.data.filterProperty)
                    ctx.commit('setPaginationValues', response.data.products);
                    ctx.commit('addInProducts', response.data.products);
                })
                .catch(error => {
                    console.log(error)
                })
        },

        setFilterCategory(ctx, obj){
            if(ctx.rootState.routeModule.route.query[`${obj.category}`] === obj.name){
                return;
            }
            ctx.commit('updateFilterCategoryId', {
                catalog_field: `catalog_${obj.category}_id`,
                id: obj.id
            })

            let queryBind = Object.assign({}, ctx.rootState.routeModule.route.query);
            queryBind[`${obj.category}`] = obj.name;

            vueRouter.push({
                path: ctx.rootState.routeModule.route.path,
                query: queryBind,
            })
        },

        changeNavbarOption(ctx, obj){
            ctx.state['catalog_current_'+ obj.value] = obj.current === 'Name' ? 'product_name' : obj.current.toLowerCase();
            ctx.dispatch('getProducts')
        },
    },

    mutations: {

        updateFilterCategoryId(state, data){
            // data.catalog_field = *
            // * = catalog_categories_id
            // * = catalog_brands_id
            // * = catalog_designers_id

            state[data.catalog_field] = data.id
        },

        setFilterProperties(state, properties){
            let arr = Object.entries(properties)
            arr.forEach((element)=>{
                Vue.set(state.catalog_dataFilterProperty, element[0], {
                    name: element[0],
                    data: element[1]
                })
            })
        },

        setRequestUrl(state, url){
            state.catalog_request_url = url
        },

        addInProducts(state, response){
            state.catalog_products = [];
            response.data.forEach((product) => {
                state.catalog_products.push(product)
            })
        },

        setPaginationValues(state, pagination_data){
            if(pagination_data.first_page_url.match('catalog/init')){
                if(pagination_data.prev_page_url) pagination_data.prev_page_url = pagination_data.prev_page_url.replace('catalog/init', 'catalog');
                if(pagination_data.next_page_url) pagination_data.next_page_url = pagination_data.next_page_url.replace('catalog/init', 'catalog');
                   pagination_data.last_page_url = pagination_data.last_page_url.replace('catalog/init', 'catalog')
                   pagination_data.first_page_url = pagination_data.first_page_url.replace('catalog/init', 'catalog')
                   pagination_data.links.forEach( el => {
                    if(el.url) el.url = el.url.replace('catalog/init', 'catalog')
                })
            }
            let filteredLinks = pagination_data.links.filter((el, index) => (index !== 0) && !((pagination_data.links.length - 1) === index))
            Vue.set(state.catalog_pagination, 'prev_page' , pagination_data.prev_page_url);
            Vue.set(state.catalog_pagination, 'next_page' , pagination_data.next_page_url);
            Vue.set(state.catalog_pagination, 'current_page' , pagination_data.current_page);
            Vue.set(state.catalog_pagination, 'last_page' , pagination_data.last_page_url);
            Vue.set(state.catalog_pagination, 'first_page' , pagination_data.first_page_url);
            Vue.set(state.catalog_pagination, 'links' , filteredLinks);
        },

        setUserCategory(state, user_category){
            state.catalog_user_category = user_category;
        },

        changeCatalogCategory(state, category){
            state.catalog_category = category
        },

        defaultSettings(state){
            state.catalog_categories_id = null
            state.catalog_brands_id = null
            state.catalog_designers_id = null
            state.catalog_category = null
            state.catalog_brand = null
            state.catalog_designer = null
            state.catalog_current_show =  state.catalog_defaultPaginate
            state.catalog_current_sort = state.catalog_defaultSort
        },

    }
}
