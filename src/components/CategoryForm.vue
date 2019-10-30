<template>
   <div>

         <div class="form-row">
            <div class="col-md-4 mb-3 form-row">
               <label for="validationDefault01">Descrição</label>
               <input type="text" class="form-control" id="validationDefault01" v-model="category.description" required>
            </div>
         </div>

         <button class="btn btn-success mr-2" v-on:click="emitirEvento">Salvar</button>
         <router-link to="/categorias">
            <button class="btn btn-danger" v-on:click="emitirEvento">Cancelar</button>
         </router-link>

   </div>
</template>

<script>

    import Category from "../models/Category";

    export default {
        name: "CategoryForm",
        data() {
           return {
              category: new Category()
           }
        },
        methods: {
           emitirEvento(){
              this.$emit('newCategory', this.category)
           }
        }
    }
</script>

<style scoped>

</style>