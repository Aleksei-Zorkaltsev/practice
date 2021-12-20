<template>
    <div class="nav_here">
        <div class="container nav_titleAndCrump">
            <h1>{{ name.toUpperCase() }}</h1>
            <nav class="nav_breadcrumb">

                <router-link :to="`/`">HOME</router-link>
                <router-link v-if="user_category"
                             :to="`${user_category}`"
                >{{user_category.replace("/", '').toUpperCase()}}
                </router-link>

                <span v-if="category">{{ category.toUpperCase()}}</span>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        props: ['name','user_category', 'category'],
        data(){
            return{
            }
        },
        methods: {
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>
