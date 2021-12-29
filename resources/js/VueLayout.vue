<script src="services/getUserApi.js"></script>
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

    export default {
        name: "VueLayout",
        props: ['authUser'],
        components: {
            'v-header': header,
            'v-top-nav': top_nav,
            'v-footer': footer,
        },
        methods:{
            setStoreUser(){
                if (this.authUser) this.$store.commit('setUser', this.authUser);
            },

            setStoreRoute(){
                this.$store.commit('SET_ROUTE', this.$route);
                this.$router.beforeEach((to, from, next) => {
                    this.$store.commit('SET_ROUTE', to);
                    next();
                });
            }
        },

        mounted() {
            this.setStoreUser()
            this.setStoreRoute()
        },

    }
</script>

<style scoped>

</style>
