<template>
    <div>
        <table class="table table-bordered ">
            <thead>
            <tr>
                <th>ID</th>
                <th>Descrição</th>
                <th width="15%">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="category in categories" v-bind:key="category.id">
                <td>{{category.id}}</td>
                <td>{{category.description}}</td>
                <td>
                    <button class="btn btn-primary">Editar</button>
                    <button class="btn btn-danger">Excluir</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: "CategoriasList",
        data() {
            return {

            }
        },
        props: [
            'categories'
        ]
    }
</script>

<style scoped>
 table thead {
     background-color: lightgrey;
 }
</style>