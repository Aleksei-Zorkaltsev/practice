<template>
    <div class="navbar_catalogUnit">
        <p>{{ featureName }}</p>
        <select class="catalogNavbar-dropdown" @change="changeCurrent(featureValue)" v-model="current" :value="current">
            <option v-for="item in listChoices">{{ item }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "CatalogNavBarShowUnit",
        props: ['featureName', 'listChoices', 'featureValue'],
        data(){
            return {
                current: null,
            }
        },
        methods: {

            /**
             * @param value
             * value = name property. Function dynamic call property Catalog, change property and call products
             */
            changeCurrent(value){
                this.$parent.$parent['current_'+ value] = this.current === 'Name' ? 'product_name' : this.current.toLowerCase();
                this.$parent.$parent.getProducts();
            },

        },
        mounted(){
            this.current = this.listChoices[0]; // set default
        }
    }
</script>

<style scoped>

</style>
