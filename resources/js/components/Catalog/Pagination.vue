<template>
    <div class="catalog_pagination">
        <div>
            <!-- стрелочка влево -->
            <a v-if="pagination.prev_page"
               :href="pagination.prev_page"
               @click.prevent="getPaginateProducts(pagination.prev_page)">
                <i class="fas fa-chevron-left"></i>
            </a>
            <span v-else>
                <i class="fas fa-chevron-left"></i>
            </span>

            <!-- ссылки на страницы -->
            <a v-for="link in pagination.links"
                :href="link.url"
                :key="link.url"
                @click.prevent="getPaginateProducts(link.url)">
                <span v-if="link.label" :class="{ thisActivePage: pagination.current_page === +link.label}">{{ link.label }}</span>
            </a>

            <!-- стрелочка вправо -->
            <a  v-if="pagination.next_page"
                :href="pagination.next_page"
                @click.prevent="getPaginateProducts(pagination.next_page)">
                <i class="fas fa-chevron-right"></i>
            </a>
            <span v-else>
                <i class="fas fa-chevron-right"></i>
            </span>

        </div>
        <a class="catalog_viewAll" @click="$emit('click')">View All</a>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Pagination",

        /**
         * @pagination - object class:none
         * pagination.prev_page -type: string URL
         * pagination.next_page  -type: string URL
         * pagination.current_page  -type: string URL
         * pagination.last_page  -type: string URL
         * pagination.first_page  -type: string URL
         * pagination.links -  -type: obj
         */
        props: ['pagination'],

        methods: {
            ...mapActions(['getProducts']),

            getPaginateProducts(url){
                if(!url) return;
                this.getProducts(url);
            },
        },
    }
</script>

<style scoped>

</style>
