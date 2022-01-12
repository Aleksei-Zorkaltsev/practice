<template>
    <div class="navbar_catalogUnit">
        <p>{{ featureName }}</p>
        <select class="catalogNavbar-dropdown"
                @change="changeNavbarOption({
                        value: featureValue,
                        current:current
                    })"
                v-model="current"
                :value="current">
            <option v-for="item in listChoices">{{ item }}</option>
        </select>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "CatalogNavBarShowUnit",
        props: ['featureName', 'listChoices', 'featureValue'],
        data(){
            return {
                current: null,
            }
        },
        computed: mapGetters(['']),
        methods: mapActions(['changeNavbarOption']),

        mounted(){
            this.current = this.listChoices[0]; // set default
        }
    }
</script>

<style scoped>

</style>
