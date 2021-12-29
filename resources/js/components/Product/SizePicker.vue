<template>
    <div class="single_ChoiseUser">
        <h3>CHOOSE SIZE</h3>
        <div class="single_userColor" @click="toggleDropdown($event)">
            <div class="product-chooseColor">{{ currentChoose }}</div>
        </div>
        <div v-if="dropdown" class="product-dropdown-chooser">
            <div @click="setSize('XXL')">XXL</div>
            <div @click="setSize('XL')">XL</div>
            <div @click="setSize('L')">L</div>
            <div @click="setSize('M')">M</div>
            <div @click="setSize('S')">S</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SizePicker",

        data(){ return {
            dropdown: false,
            currentChoose: null,
        }},

        methods: {
            setSize(value){
                this.currentChoose = value
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

        mounted(){
            this.setSize('M');
        }
    }
</script>

<style scoped>

</style>
