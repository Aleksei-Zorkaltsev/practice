<template>
    <div class="admin-add-block">
        <h3>Add Product:</h3>
        <div class="admin-form">
            <div>
                <p>Product name: </p>
                <input v-model="form.product_name" type="text">

                <p>Img: </p>
                <input v-model="form.img" type="text">

                <p>Description: </p>
                <textarea v-model="form.describes"></textarea>
                <p>Material: </p>
                <input v-model="form.material" type="text">

            </div>
            <div>
                <p>Price: </p>
                <input v-model="form.price" type="text">

                <p>Brand:</p>
                <select v-model="form.brand_id" type="text">
                    <option v-for="brand in brands_list" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
                </select>

                <p>Category</p>
                <select v-model="form.category_id" type="text">
                    <option v-for="category in categories_list" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>

                <p>Designer:</p>
                <select v-model="form.designer_id" type="text">
                    <option v-for="designer in designers_list" :key="designer.id" :value="designer.id">{{ designer.name }}</option>
                </select>

                <p>User category</p>
                <select v-model="form.user_category" type="text">
                    <option v-for="user_category in user_category_list" :value="user_category">{{ user_category }}</option>
                </select>
            </div>
        </div>
        <p v-if="status" style="color: green">*Product added.</p>
        <p v-else-if="status === false" style="color: red">*Product not added</p>
        <button @click="addProduct()">addProduct</button>
    </div>
</template>

<script>
    export default {
        name: "AddProductForm",
        data(){
            return{
                form: {
                    product_name: null,
                    img: null,
                    describes: null,
                    material: null,
                    user_category: null,
                    price: null,
                    brand_id: null,
                    category_id: null,
                    designer_id: null,
                },
                brands_list: null,
                categories_list: null,
                user_category_list: null,
                designers_list: null,
                status: null
            }
        },
        methods: {
            addProduct() {
                this.status = null;

                axios.post('/Api/admin/products', this.form)
                    .then(response => {
                        this.status = response.data.status
                        this.resetForm();
                    }).catch(err => {
                    console.log(err)
                })
            },

            resetForm(){
                this.form.product_name = null
                this.form.img = null
                this.form.describes = null
                this.form.material = null
                this.form.user_category = null
                this.form.price = null
                this.form.brand_id = null
                this.form.category_id = null
                this.form.designer_id = null
            }
        },

        mounted(){
            axios.get('/Api/admin/init_form_product')
                .then(response => {
                    this.brands_list = response.data.brands;
                    this.categories_list = response.data.categories;
                    this.user_category_list = response.data.user_category;
                    this.designers_list = response.data.designers;
                }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>

</style>
