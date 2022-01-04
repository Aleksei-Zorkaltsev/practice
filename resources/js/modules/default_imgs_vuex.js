export default {
    state: {
        img_cart_ico: '../storage/img/icon/cart.png',
        img_admin_ico: '../storage/img/icon/admin_ico.png',
        img_default_catalog_item: '../storage/img/def_Product.jpg',
        img_product_button_addCart: '../storage/img/Forma_1_copy.png',
    },
    getters: {
        getCartIco(state){
            return state.img_cart_ico
        },

        getDefaultCatalogImg(state){
            return state.img_default_catalog_item
        },

        getAdminIco(state){
            return state.img_admin_ico
        },

        getProductButtonAddCartIco(state){
            return state.img_product_button_addCart
        }
    },
}
