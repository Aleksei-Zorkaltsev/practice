<template>
    <div class="account" v-if="getStateUser">
        <h2>User account</h2>
        <div class="account_data">
            <p>name: {{ getStateUser.name }}</p>
            <p>email: {{ getStateUser.email }}</p>
        </div>
        <button @click.prevent="logout">logout</button>
    </div>
</template>

<script>
    import vueRouter from "../../VueRouter"
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "Main",

        computed: mapGetters(['getStateUser']),
        methods: mapActions(['logout']),

        mounted(){
            if(!this.$store.state.userModule.user) vueRouter.push('login')
        }
    }
</script>

<style scoped>

</style>
