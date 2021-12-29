<template>
    <div class="single_ChoiseUser">
        <h3>CHOOSE COLOR</h3>
        <div class="single_userColor" @click="toggleDropdown($event)">
            <!-- <div class="product-selectColorPrev"></div> -->
            <div class="product-chooseColor">
                <span class="product-selectColorPrev" :style="`background-color: ${currentChoose}`"></span>
                {{ currentChoose }}</div>
        </div>
        <div v-if="dropdown" class="product-dropdown-chooser">
            <div @click="setCurrentChoose('Red')"><span class="product-selectColorPrev" style="background-color: red"></span>Red</div>
            <div @click="setCurrentChoose('Black')"><span class="product-selectColorPrev" style="background-color: black"></span>Black</div>
            <div @click="setCurrentChoose('White')"><span class="product-selectColorPrev" style="background-color: white"></span>White</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ColorPicker",
        data(){ return {
            dropdown: false,
            currentChoose: null,
        }},

        methods: {

            setCurrentChoose(value){
                this.currentChoose = value;
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
        mounted() {
            this.setCurrentChoose('Red');
        }
    }
</script>

<style scoped>

</style>
