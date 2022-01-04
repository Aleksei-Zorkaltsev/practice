<template>
    <div class="single_ChoiseUser">
        <h3>CHOOSE COLOR</h3>
        <div class="single_userColor" @click="toggleDropdown($event)">
            <div v-if="currentColorName"  class="product-chooseColor">
                <span class="product-selectColorPrev" :style="`background-color: ${getCurrentColor.code}`"></span>
                <span>{{ getCurrentColor.color }} </span>
            </div>
            <div v-else class="product-chooseColor">
                <span>Pick Color ...</span>
            </div>
        </div>
        <div v-if="dropdown" class="product-dropdown-chooser">
            <div v-for="color in getColors" :key="color.id" @click="setColor(color.name, color.color_code)">
                <span class="product-selectColorPrev" :style="`background-color: ${color.color_code}`"></span>
                <span> {{color.name}} </span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "ColorPicker",
        data(){ return {
            dropdown: false,
            currentColorName: null,
            currentColor: null,
        }},

        computed: mapGetters(['getColors', 'getCurrentColor']),

        methods: {
            ...mapActions([]),

            setColor(name, code){
                this.$store.commit('SET_CURRENT_COLOR', {
                    color: name,
                    code: code,
                })
                this.currentColorName = name
                this.currentColor = code
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
