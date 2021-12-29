<template>
    <div class="admin">
        <span>имя: </span><input v-model="form.product_name" type="text"> <br>
        <span>картинка: </span><input v-model="form.img" type="text"> <br>
        <span>описание: </span><input v-model="form.describes" type="text"> <br>
        <span>материал: </span><input v-model="form.material" type="text"> <br>
        <span>user_category</span><select v-model="form.user_category" type="text"> <br>
        <option selected value="man">man</option>
            <option value="man">woman</option>
            <option value="man">kids</option>
        </select><br>
        <span>цена: </span><input v-model="form.price" type="text"><br>
        <span>бренд ид: </span><input v-model="form.brand_id" type="number"><br>
        <span>категори ид: </span><input v-model="form.category_id" type="number"><br>
        <span>дизайнер ид: </span><input v-model="form.designer_id" type="number"><br>

        <button @click="addProduct()">addProduct</button>
    </div>
</template>

<script>
    export default {
        name: "MainAdmin",

        data(){
           return{
               form: {
                   product_name: '',
                   img: '',
                   describes: '',
                   material: null,
                   user_category: null,
                   price: null,
                   brand_id: null,
                   category_id: null,
                   designer_id: null,
               }
           }
        },

        methods: {
            addProduct() {
                axios.post('/Api/products', this.form)
                    .then(response => {
                        console.log(response)
                    }).catch(err => {
                        console.log(err)
                    })
            }
        },
    }
</script>

<style scoped>

</style>
