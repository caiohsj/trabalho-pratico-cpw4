<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>
                    Cadastro
                    <small class="text-muted"> | Nova Categoria</small>
                </h3>
            </div>
        </b-row>
        <category-form v-on:newCategory="createCategory"></category-form>
    </div>
</template>

<script>


    import CategoryForm from "../components/CategoryForm";
    import categoryService from "../services/category";
    export default {
        name: "CategoryCreate",
        components: {
            CategoryForm

        },
        methods: {
            createCategory(category){
                categoryService.create(category)
                    .then((response) => {
                        console.log(response)
                        this.$router.push('/categorias')
                    })
                    .catch((response) => {
                        console.log('Erro: ')
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>

</style>