<template>
    <div v-if="isAdmin">
        <v-admin-breadcrumbs></v-admin-breadcrumbs>
        <div class="admin container">
            <v-add-product-form></v-add-product-form>
            <v-add-critery critery-name="Category" route-name="categories"></v-add-critery>
            <v-add-critery critery-name="Brand" route-name="brands"></v-add-critery>
            <v-add-critery critery-name="Designer" route-name="designers"></v-add-critery>
        </div>
    </div>
</template>

<script>
    import vueRouter from "./../../VueRouter"
    import addCritery from "./AddNewCritery"
    import addProductForm from "./AddProductForm"
    import breadCrumbs from "../Breadcrumbs/Admin"

    export default {
        name: "MainAdmin",
        data(){
            return{
                isAdmin: null,
            }
        },
        components: {
            'v-add-critery': addCritery,
            'v-add-product-form': addProductForm,
            'v-admin-breadcrumbs': breadCrumbs,
        },
        beforeCreate() {
            axios.get('Api/admin_status').then(response => {
                this.isAdmin = response.data.status
                if(!this.isAdmin) vueRouter.push("/");

            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>
