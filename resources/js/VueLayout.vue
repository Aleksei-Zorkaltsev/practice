<template>
    <div>
        <v-header :auth="auth"></v-header>
        <v-top-nav></v-top-nav>
        <div class="content">
            <router-view :user="authUser"></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from "./components/Header/MainHeader"
    import top_nav from "./components/Header/Nav"
    import footer from "./components/Footer/MainFooter"

    const GLOBAL_STORE = {
        user: null,
    };

    export default {
        name: "VueLayout",
        props: ['user', 'auth', 'authUser'],
        components: {
            'v-header': header,
            'v-top-nav': top_nav,
            'v-footer': footer,
        },
        mounted() {
            GLOBAL_STORE.user = this.authUser;
        }
    }
</script>

<style scoped>

</style>
