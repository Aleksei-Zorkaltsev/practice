<template>
    <div class="single_ChoiseUser">
        <h3>CHOOSE SIZE</h3>
        <div class="single_userColor" @click="toggleDropdown($event)">
            <div v-if="gerCurrentSize" class="product-chooseColor">{{ gerCurrentSize.size }}</div>
            <div v-else class="product-chooseColor">Pick Size ...</div>
        </div>
        <div v-if="dropdown" class="product-dropdown-chooser">
            <div v-for="obj in getSizes" :key="obj.id" @click="setSize(obj.id, obj.size)">{{ obj.size }}</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "SizePicker",

        data(){ return {
            dropdown: false,
        }},

        computed: mapGetters(['getSizes', 'gerCurrentSize']),

        methods: {
            setSize(id, size){
                this.$store.commit('SET_CURRENT_SIZE', {
                    id: id,
                    size: size
                });
            },

            toggleDropdown (e) {
                e.stopPropagation()
                this.dropdown = !this.dropdown
                if (this.dropdown) {
                    window.addEventListener('click', () => {
                        this.dropdown = false
                    })
                } else {
                    window.removeEventListener('click', () => {
                        this.dropdown = false
                    })
                }
            }
        },
    }
</script>

<style scoped>

</style>
