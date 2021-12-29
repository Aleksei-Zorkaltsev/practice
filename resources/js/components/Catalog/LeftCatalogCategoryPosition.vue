<template>
    <div class="productsLeft">
        <div class="card-header productLeftUnit" @click="show = !show">
            {{ name.toUpperCase() }}
        </div>
        <div v-show="show">
            <nav class="card-body productLeftNav">
                <a v-for="obj in data" :key="obj.id"
                    @click.prevent="setFilterCategory({
                        category: name,
                        name: obj.name,
                        id: obj.id
                    })"
                >{{ obj.name }}</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import vueRouter from "../../VueRouter";
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "LeftCatalogCategoryPosition",
        props: ['name', 'data'],
        data() { return {
            show: false
        }},

        methods: mapActions(['setFilterCategory']),

        mounted(){
            if(this.name === 'categories') this.show = true;
        }

    }
</script>

<style scoped>

</style>
