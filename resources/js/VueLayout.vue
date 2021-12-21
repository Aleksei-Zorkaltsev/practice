<template>
    <div>
        <v-header :auth="auth"></v-header>
        <v-top-nav></v-top-nav>
        <div class="content">
            <router-view :user="user"></router-view>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from "./components/Header/MainHeader";
    import top_nav from "./components/Header/Nav";
    import footer from "./components/Footer/MainFooter";

    export default {
        name: "VueLayout",
        props: ['user', 'auth'],
        components: {
            'v-header': header,
            'v-top-nav': top_nav,
            'v-footer': footer,
        }
    }
</script>

<style scoped>

</style>
