ww<script src="services/getUserApi.js"></script>
<template>
    <div>
        <v-header></v-header>
        <v-top-nav></v-top-nav>
        <div class="content">
            <router-view></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from "./components/Header/MainHeader"
    import top_nav from "./components/Header/Nav"
    import footer from "./components/Footer/MainFooter"
    import { mapActions } from "vuex"

    export default {
        name: "VueLayout",
        props: ['authUser'],
        components: {
            'v-header': header,
            'v-top-nav': top_nav,
            'v-footer': footer,
        },
        methods: mapActions(['setStoreUser', 'setStoreRoute', 'initCart']),

        mounted() {
            this.setStoreUser(this.authUser)
            this.setStoreRoute({
                router: this.$router,
                route: this.$route
            })
            this.initCart()
        },
    }
</script>

<style scoped>

</style>
