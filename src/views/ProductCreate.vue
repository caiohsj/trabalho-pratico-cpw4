<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <product-form></product-form>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import ProductForm from "../components/ProductForm";
    export default {
        name: "ProductCreate",
        components: {
            ProductForm,
            BRow
        }
    }
</script>

<style scoped>

</style>