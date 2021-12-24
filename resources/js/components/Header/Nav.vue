<template>
    <nav class="topNav">
        <router-link v-for="link in links" :key="link.title" :to="link.href">{{ link.title }}</router-link>
    </nav>
</template>
<script>
    export default {
        name: "Nav",
        data(){
            return {
                links:[
                    {
                        title: 'HOME',
                        href: '/'
                    },
                    {
                        title: 'MAN',
                        href: '/man',
                    },
                    {
                        title: 'WOMAN',
                        href: '/woman'
                    },
                    {
                        title: 'KIDS',
                        href: '/kids'
                    },
                    {
                        title: 'ACCESSORIES',
                        href: '/accessories'
                    },
                    {
                        title: 'FEATURED',
                        href: '/featured'
                    },
                    {
                        title: 'HOT DEALS',
                        href: '/hot_deals'
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>
