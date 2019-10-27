<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Categorias</small>
                </h3>
            </div>
        </b-row>

        <router-link to="/category/create">
            <b-button class="btn btn-primary">Novo</b-button>
        </router-link>

        <categorias-list v-bind:categories="categories"></categorias-list>
    </div>
</template>

<script>
    import CategoriasList from "../components/CategoriasList";
    import categoryService from "../services/category";
    export default {
        name: "Categorias",
        components: {
            CategoriasList
        },
        data() {
            return {
                categories: []
            }
        },
        mounted() {
            this.loadCategories()
        },
        methods: {
            loadCategories() {
                categoryService.list()
                    .then((response) => {
                        this.categories = response.data;
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            }
        },
        watch: {
            '$route': 'loadCategories'
        }
    }
</script>

<style scoped>

</style>