<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <product-form v-on:save="save"></product-form>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import ProductForm from "../components/ProductForm";
    import productService from '../services/product'
    export default {
        name: "ProductCreate",
        components: {
            ProductForm,
            BRow
        },
        methods: {
            save(product) {
                productService.create(product)
                    .then((response) => {
                        console.log(response.data)
                        this.$router.push('/products/'+product.category.id+'/1')
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>