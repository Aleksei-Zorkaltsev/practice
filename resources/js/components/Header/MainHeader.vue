<template>
    <div class="header">
            <div class="container">
                <header-logo></header-logo>
                <header-search></header-search>
                <div class="header_Cart_Account">
                    <a class="cart" href="#"><img :src="imgCart" alt="cart"></a>
                    <div v-if="login" class="cart">
                        <!-- img/icon/cart.png  -->
                        <div class="myAccount">
                            <a href="#">MyAccount <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div v-else class="header_LOG_REG">
                        <router-link to="/login">LOGIN</router-link>
                        <router-link to="/registry">REGISTRY</router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import logo from "./Logo"
    import topSearch from "./Search"

    export default {
        name: "Header",
        data(){return{
            login: false,
            imgCart: '../storage/img/icon/cart.png',
        }},
        components:{
            'header-logo': logo,
            'header-search': topSearch,
        },
        mounted(){
            axios.get('/Api/user')
                .then(response => {
                    //this.login = response.data
                })
                .catch()
        }
    }
</script>

<style scoped>

</style>
