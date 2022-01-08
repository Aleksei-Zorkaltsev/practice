export default {
    state: {
        cart_products: [],

        cart_discount_title: '20%',
        cart_discount_value: 100,

        cart_add_errors: null,
    },
    getters: {

        getError_cartAdd(state){
            return state.cart_add_errors;
        },

        getSubTotal(state){
            let result = 0;
            state.cart_products.forEach((item)=>{
                result += item.product.price * item.quantity
            })
            return result;
        },

        getGrandTotal(state, getters){
            return (getters.getSubTotal / 100) * state.cart_discount_value;
        },

        getCartProducts(state){
            if(!state.cart_products.length) return false;
            return state.cart_products;
        },

        getCountProductInCart(state){
            return state.cart_products.length
        }
    },
    actions: {

        initCart(ctx){

            ctx.commit('RESET_CART_PRODUCTS')

            axios.get(`${location.origin}/Api/cart`)
                .then(response => {
                    if(response.data.length){
                        response.data.forEach((el) => {
                            console.log('init, el' , el)
                            ctx.commit('ADD_PRODUCT_IN_CART_PRODUCTS', el);
                        })
                    }

                })
                .catch(
                    err => {
                        console.log(err)
                })
        },

        addToCart(ctx, data){

            ctx.commit('SET_ADD_CART_ERRORS', null)
            axios.post(`${location.origin}/Api/cart/product/add`, data)
                .then(response => {
                    if(response.data.status){

                        console.log('data', data)
                        console.log('res.data.product', response.data.product)

                        ctx.commit('ADD_PRODUCT_IN_CART_PRODUCTS', response.data.product)
                    } else {
                        ctx.commit('SET_ADD_CART_ERRORS', response.data.message)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },

        changeProductCartQuantity(ctx, param){
            axios.post(`${location.origin}/Api/cart/product/update_quantity`, {
                    cart_list_item_id: param.id,
                    quantity: param.value
                })
                .then(response => {
                    if(response.data.status){
                        ctx.commit('UPDATE_PRODUCT_IN_CART_QUANTITY', {
                            id: param.id,
                            value: param.value
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        },

        deleteCartProduct(ctx , id){
            axios.post(`${location.origin}/Api/cart/product/remove`, {id: id})
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    mutations: {

        UPDATE_PRODUCT_IN_CART_QUANTITY(state, param){
            state.cart_products.find((el) => {
                if(el.id === param.id){
                    el.quantity = param.value;
                }
            })
        },

        SET_ADD_CART_ERRORS(state, message){
            state.cart_add_errors = message
        },

        RESET_CART_PRODUCTS(state){
            state.cart_products = [];
        },

        ADD_PRODUCT_IN_CART_PRODUCTS(state, product){
            state.cart_products.push(product)
        },
    },
}
