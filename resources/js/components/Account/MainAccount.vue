<template>
    <div class="account">
        <h2>User account</h2>
        <div class="account_data">
            <p>name: {{  }}</p>
            <p>email: {{  }}</p>
        </div>
        <button @click.prevent="logout">logout</button>
    </div>
</template>

<script>
    import vueRouter from "../../vueRouter";

    export default {
        name: "Main",
        props: ['user'],
        data(){
            return {}
        },
        methods: {
            logout(){
                axios.post('Api/logout')
                    .then(response => {
                        this.$root.$data.user = {};
                        this.$root.$data.auth = false;
                        vueRouter.push('login')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
        },
        created(){
            if(!this.user) vueRouter.push('login')
        }
    }
</script>

<style scoped>

</style>
