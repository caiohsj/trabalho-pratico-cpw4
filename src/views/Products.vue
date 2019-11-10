<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>
        <products-list v-bind:products="products"></products-list>
    </div>
</template>

<script>
    import productService from "../services/product"
    import ProductsList from "../components/ProductsList";
    export default {
        name: "Products",
        components: {ProductsList},
        data(){
          return {
            products: []
          }
        },
        methods: {
            loadProducts(){
                productService.list(this.$route.params.idCategory, this.$route.params.page)
                    .then((response) => {
                        this.products = response.data
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        },
        mounted() {
            this.loadProducts()
        },
        watch: {
            '$route': 'loadProducts'
        }
    }
</script>

<style scoped>

</style>