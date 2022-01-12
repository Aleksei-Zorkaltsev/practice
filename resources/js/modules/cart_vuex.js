export default {
    state: {
        cart_products: [],
        cart_add_errors: null,

        cart_coupon: null,
        cart_coupon_accept: false,
        cart_coupon_error: null,

        cart_discount_value: 0,
        cart_discount_name: null,

        cart_shipping_country: null,
        cart_shipping_state: null,
        cart_shipping_postcode: null,
    },
    getters: {

        getCartShippingCountry(state){
            return state.cart_shipping_country
        },
        getCartShippingState(state){
            return state.cart_shipping_state
        },
        getCartShippingPostCode(state){
            return state.cart_shipping_postcode
        },

        getCouponAccept(state){
            return state.cart_coupon_accept;
        },
        getDiscountName(state){
             return state.cart_discount_name;
        },

        getCouponError(state){
            return state.cart_coupon_error;
        },

        getError_cartAdd(state){
            return state.cart_add_errors;
        },

        getSubTotal(state){
            let result = 0;
            state.cart_products.forEach((item)=>{
                result += item.product.price * item.quantity
            })
            return result.toFixed(2);
        },

        getDiscountValue(state){
            return state.cart_discount_value;
        },

        getGrandTotal(state, getters){
            let result = (getters.getSubTotal / 100) * (100 - state.cart_discount_value);
            return result.toFixed(2);
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
            ctx.commit('SET_ERROR_ADD_CART', null)

            axios.post(`${location.origin}/Api/cart/product/add`, data)
                .then(response => {
                    console.log(response)
                    if(response.data.status){
                        ctx.commit('ADD_PRODUCT_IN_CART_PRODUCTS', response.data.product)
                    } else {
                        ctx.commit('SET_ERROR_ADD_CART', response.data.message)
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
                    if(response.data.status) {
                        ctx.commit('DELETE_FROM_CART_PRODUCTS', id)
                    }

                }).catch(err => {
                    console.log(err)
                })
        },

        clearCart(ctx){
            axios.post(`${location.origin}/Api/cart/reset`)
                .then(response => {
                    if(response.data.status){
                        ctx.commit('RESET_CART_PRODUCTS');
                    }
                }).catch(err => {
                console.log(err)
            })
        },

        useCoupon(ctx){
            axios.post(`${location.origin}/Api/cart/coupon`, {coupon: ctx.state.cart_coupon})
                .then(response => {
                    if(response.data.status){
                        ctx.commit('SET_DISCOUNT', response.data.coupon);
                        ctx.commit('SET_CART_COUPON_ACCEPT');
                    } else {
                        ctx.commit('SET_ERROR_CART_COUPON', response.data.message )
                    }
                })
                .catch(err => {
                    console.log( err )
                });
        }

    },

    mutations: {


        UPDATE_CART_SHIPPING_COUNTRY(state, value){
            state.cart_shipping_country = value;
        },
        UPDATE_CART_SHIPPING_STATE(state, value){
            state.cart_shipping_state = value;
        },
        UPDATE_CART_SHIPPING_POSTCODE(state, value){
            state.cart_shipping_postcode = value;
        },

        UPDATE_PRODUCT_IN_CART_QUANTITY(state, param){
            state.cart_products.find((el) => {
                if(el.id === param.id){
                    el.quantity = param.value;
                }
            })
        },

        UPDATE_CART_COUPON(state, value){
            state.cart_coupon = value;
        },

        DELETE_FROM_CART_PRODUCTS(state, id){
            state.cart_products.find((item, index)=>{
                if(item.id === id){
                    state.cart_products.splice(index, 1)
                    return true;
                }
            });
        },

        SET_ERROR_CART_COUPON(state, message){
            state.cart_coupon_error = message;
        },

        SET_ERROR_ADD_CART(state, message){
            state.cart_add_errors = message
        },

        SET_CART_COUPON_ACCEPT(state){
            state.cart_coupon_accept = true;
        },

        SET_DISCOUNT(state, data){
            state.cart_discount_value = data.discount;
            state.cart_discount_name = data.name;
        },

        RESET_CART_PRODUCTS(state){
            state.cart_products = [];
        },

        ADD_PRODUCT_IN_CART_PRODUCTS(state, product){
            state.cart_products.push(product)
        },
    },
}
