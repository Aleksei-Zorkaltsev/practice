<template>
    <div class="account" v-if="getStateUser">
        <h2>User account.</h2>
        <div class="profile">
            <hr>
            <h3>Profile:</h3>
                Name: {{getStateUser.name}} <br>
                Email: {{getStateUser.email}}

            <hr>
        </div>
        <button @click="logout">LOGOUT</button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "MainAccount",
        computed: mapGetters(['getStateUser']),
        methods: mapActions(['logout']),
    }
</script>

<style scoped>

</style>
