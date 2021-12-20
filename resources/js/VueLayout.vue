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
    import header from "./components/Header/Main";
    import top_nav from "./components/Header/Nav";
    import footer from "./components/Footer/Main";
    import auth from "./components/Auth/Main";

    export default {
        name: "VueLayout",
        components: {
            'v-header': header,
            'v-top-nav': top_nav,
            'v-footer': footer,
            'v-auth': auth,
        }
    }
</script>

<style scoped>

</style>
