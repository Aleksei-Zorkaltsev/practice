<template>
    <div class="header">
            <div class="container">
                <header-logo></header-logo>
                <header-search></header-search>
                <div class="header_Cart_Account">
                    <router-link class="cart" to="/cart"><img :src="imgCart" alt="cart"></router-link>
                    <div v-if="getStateUser" class="cart" ref="optionAccountList">
                        <button @click.prevent="toggleDropdown($event)">MyAccount<i class="fa fa-caret-down" aria-hidden="true"></i></button>
                        <ul class="dropdownOptionsAccount" v-show="showDropdown">
                            <li><router-link to="/account">Profile</router-link></li>
                            <li @click="logout">Logout</li>
                        </ul>
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
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Header",
        data(){
            return {
                showDropdown: false,
                imgCart: '../storage/img/icon/cart.png',
        }},
        components:{
            'header-logo': logo,
            'header-search': topSearch,
        },

        computed: mapGetters(['getStateUser']),
        methods: {
            ...mapActions(['logout']),

            toggleDropdown (e) {
                e.stopPropagation()
                this.showDropdown = !this.showDropdown
                if (this.showDropdown) {
                    window.addEventListener('click', () => {
                        this.showDropdown = false
                    })
                } else {
                    window.removeEventListener('click', () => {
                        this.showDropdown = false
                    })
                }
            }
        },
    }
</script>

<style scoped>

</style>
