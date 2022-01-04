import VueRouter from './../VueRouter'
export default {
    state: {
        product_item: {},

        product_colors: null,
        product_sizes: null,

        product_current_color: null,
        product_current_size: null,
    },
    getters: {
        getProduct(state){
            return state.product_item
        },
        getColors(state){
            return state.product_colors
        },
        getCurrentColor(state){
            return state.product_current_color
        },
        getSizes(state){
            return state.product_sizes
        },
        gerCurrentSize(state){
            return state.product_current_size
        }
    },
    actions: {
        getApiProduct(context, id) {
            let url = `${location.origin}/Api/products/${id}`;
            axios.get(url).then(response => {
                    //if(!response.data.error){}
                    context.commit('SET_CURRENT_COLOR', null);
                    context.commit('SET_CURRENT_SIZE', null);
                    context.commit('SET_PRODUCT', response.data.product[0]);
                    context.commit('ADD_PRODUCT_COLORS', response.data.colors);
                    context.commit('ADD_PRODUCT_SIZES', response.data.sizes);
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mutations: {

        SET_PRODUCT(state, data){
            let arr = Object.entries(data)
            arr.forEach((el)=>{
                Vue.set(state.product_item, el[0], el[1])
            })
        },

        ADD_PRODUCT_COLORS(state, data){
            state.product_colors = data
            console.log(state.product_colors)
        },

        ADD_PRODUCT_SIZES(state, data){
            state.product_sizes = data
        },

        SET_CURRENT_COLOR(state, value){
            state.product_current_color = value

        },
        SET_CURRENT_SIZE(state, value){
            state.product_current_size = value
        },
    }
}
