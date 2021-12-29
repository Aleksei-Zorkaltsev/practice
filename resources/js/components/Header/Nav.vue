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
                        title: 'admin',
                        href: '/admin'
                    },
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
                ]
            }
        },
    }
</script>

<style scoped>

</style>
