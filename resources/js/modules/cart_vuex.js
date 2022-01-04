export default {
    state: {
        cart_products: [],
    },
    getters: {
        getCartProducts(state){
            return state.cart_products
        },
        getCountProductInCart(state){
            return state.cart_products.length
        }
    },
    actions: {
        addToCart(ctx, obj){
            if(!obj.color){
                // return error
            }
            if(!obj.size){
                // return error
            }

            // api

            const product_cart = {
                ...obj.product,
                ...obj.color,
                ...obj.size
            }

            ctx.commit('ADD_IN_CART_PRODUCTS', product_cart)
        }
    },
    mutations: {
        ADD_IN_CART_PRODUCTS(state, product_cart){
            console.log(product_cart)
            state.cart_products.push(product_cart)
        }
    },
}
