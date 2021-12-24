export default {
    state: {
        product: null
    },
    getters: {
        getProduct(state){
            return state.product
        }
    },
    actions: {
        async getApiProduct(context, id) {
            let url = `${location.origin}/Api/products/${id}`;

            await axios.get(url).then(response => {
                context.commit('setProduct', response.data);
            })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mutations:{
        setProduct(state, productData){
            state.product = productData
        }
    }
}
