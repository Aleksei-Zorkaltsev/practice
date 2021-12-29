export default {
    state: {
        product: {}
    },
    getters: {
        getProduct(state){
            return state.product
        }
    },
    actions: {
        getApiProduct(context, id) {
            let url = `${location.origin}/Api/products/${id}`;
            axios.get(url).then(response => {
                console.log(response)
                    context.commit('setProduct', response.data);
                })
                .catch(err => {
                    console.log(err)
                })
        },

        async addToCart(context){
            console.log('addToCart')
        },
    },
    mutations:{

        setColorToProduct(state){

        },

        setProduct(state, productData){
            let arr = Object.entries(productData)
            arr.forEach((el)=>{
                Vue.set(state.product, el[0], el[1])
            })
        }
    }
}
