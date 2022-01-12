<template>
    <div class="admin-add-block">
        <h3>Add {{ criteryName }}:</h3>
        <div class="admin-form">
            <div>
                <p>имя: </p>
                <input v-model="form.name" type="text">
            </div>
        </div>
        <button @click="addCritery(routeName)">add {{ criteryName }}</button>
    </div>
</template>

<script>
    export default {
        name: "addNewCritery",
        data(){
            return {
                form: {
                    name:null
                }
            }
        },
        props: ['criteryName', 'routeName'],
        methods: {
            addCritery(resource){
                axios.post(`/Api/${resource}`, this.form)
                    .then(response => {
                        this.form.name = null;
                    }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style scoped>

</style>
