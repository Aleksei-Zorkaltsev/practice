export default {
    state: {
        product_item: {},
        product_quantity: null,
        product_colors: null,
        product_sizes: null,
        product_current_color: null,
        product_current_size: null,
        product_color_id: null,
        product_size_id: null,
    },

    getters: {
        getCurrentQuantity(state){ return state.product_quantity },
        getProduct(state){ return state.product_item },
        getColors(state){ return state.product_colors },
        getCurrentColor(state){ return state.product_current_color },
        getSizes(state){ return state.product_sizes },
        gerCurrentSize(state){ return state.product_current_size },
        getColorId(state){ return state.product_color_id },
        getSizeId(state){ return state.product_size_id },
        getQuantity(state){ return +state.product_quantity }
    },

    actions: {

        initSingleProduct(context, id) {
            let url = `${location.origin}/Api/products/${id}`;

            axios.get(url).then(response => {
                    //if(!response.data.error){}
                    context.commit('SET_CURRENT_COLOR', null);
                    context.commit('SET_CURRENT_SIZE', null);
                    context.commit('UPDATE_PRODUCT_QUANTITY', 1);
                    context.commit('SET_PRODUCT_PROPERTIES', response.data.product[0]);
                    context.commit('ADD_PRODUCT_COLORS', response.data.colors);
                    context.commit('ADD_PRODUCT_SIZES', response.data.sizes);
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },

    mutations: {

        UPDATE_PRODUCT_QUANTITY(state, value){
            state.product_quantity = value
        },

        ADD_PRODUCT_COLORS(state, data){
            state.product_colors = data
        },

        ADD_PRODUCT_SIZES(state, data){
            state.product_sizes = data
        },

        SET_PRODUCT_PROPERTIES(state, data){
            let arr = Object.entries(data)

            arr.forEach((el)=>{
                //el[0]-name: el[1]-value
                Vue.set(state.product_item, el[0], el[1])
            })
        },

        SET_CURRENT_COLOR(state, value){
            if(value){
                state.product_current_color = value
                state.product_color_id = value.id
            }
        },
        SET_CURRENT_SIZE(state, value){
            if(value){
                state.product_current_size = value
                state.product_size_id = value.id
            }
        },
    }
}
