<template>
    <div class="account">
        <h2>User account</h2>
        <p>name: {{ user.name }}</p>
        <p>email: {{ user.email }}</p>
    </div>
</template>

<script>
    export default {
        name: "Main",

        data(){
            return{
                user: {},
            }
        },
        mounted(){
            axios.get('/Api/user')
                .then(response => {
                    this.user = response.data
                })
                .catch()
        }
    }
</script>

<style scoped>

</style>
