<template>
    <div class="productsLeft">
        <div class="card-header productLeftUnit" @click="show = !show">
            {{ name.toUpperCase() }}
        </div>
        <div v-show="show">
            <nav class="card-body productLeftNav">
                <a v-for="obj in data"
                   @click.prevent="getProductsCategory(name, obj.name, obj.id)"
                >{{ obj.name }}</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import vueRouter from "../../VueRouter";

    export default {
        name: "LeftCatalogCategoryPosition",
        props: ['name', 'data'],
        data() {
            return {
                show: false
            }
        },
        methods: {

            getProductsCategory(category, name, id){

                if(this.$route.query[`${category}`] === name){
                    return;
                }
                this.$parent.$parent[`${category}_id`] = id;

                let queryBind = Object.assign({}, this.$route.query);
                queryBind[`${category}`] = name;

                vueRouter.push({
                    path: this.$route.path,
                    query: queryBind,
                })
            }
        },
        mounted(){
            if(this.name === 'categories') this.show = !this.show;
        }

    }
</script>

<style scoped>

</style>
