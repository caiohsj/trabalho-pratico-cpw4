<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-3" label="Categoria:" label-for="input-3">
                <b-form-select
                        id="input-3"
                        v-model="product.category.id"
                        :options="options"
                        required
                >
                    <template v-slot:first>
                        <option value="" disabled>-- Selecione uma opção abaixo --</option>
                    </template>
                </b-form-select>
            </b-form-group>

            <b-form-group
                    id="input-group-1"
                    label="Descrição:"
                    label-for="input-1"
            >
                <b-form-input
                        id="input-1"
                        v-model="product.description"
                        type="text"
                        required
                        placeholder="Informe a descrição"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Preço:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="product.price"
                        type="number"
                        required
                        placeholder="Informe o preço"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Preço Promocional:" label-for="input-4">
                <b-form-input
                        id="input-4"
                        v-model="product.promotionalPrice"
                        type="number"
                        required
                        placeholder="Informe o preço promocional"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Marca:" label-for="input-5">
                <b-form-input
                        id="input-5"
                        v-model="product.brand"
                        type="text"
                        required
                        placeholder="Informe a marca"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" label="Quantidade:" label-for="input-6">
                <b-form-input
                        id="input-6"
                        v-model="product.quantity"
                        type="number"
                        required
                        placeholder="Informe a quantidade"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Imagem do produto:">
                <image-to-base64
                        :maxSize ='1920/1080'
                        :previewImage='previewImage'
                        @file-info='receiveFileInfo'
                        @size-error='sizeError'
                        @type-error='typeError'
                        class='upload-btn mb-3'>
                </image-to-base64>
            </b-form-group>

            <b-button type="submit" class="mr-1" variant="primary">Salvar</b-button>
            <b-button type="reset" variant="secondary">Limpar</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ product }}</pre>
        </b-card>
    </div>
</template>

<script>
    import Product from "../models/Product";
    import {BForm, BFormGroup, BFormInput, BFormSelect, BButton, BCard} from 'bootstrap-vue'
    import categoryService from "../services/category";
    import imageToBase64 from 'vue-image-base64';

    export default {
        name: "ProductForm",
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BButton,
            BCard,
            imageToBase64
        },
        data() {
            return {
                product: new Product(),
                categories: [],
                options: [],
                show: true,
                previewImage:true,
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                this.$emit('save', this.product)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.product.description = ''
                this.product.price = ''
                this.product.category = {}
                this.product.promotionalPrice = 0
                this.product.brand = ''
                this.product.quantity = 0
                // Trick to reset/clear native browser form validation state
                // this.show = false
            },
            loadCategories() {
                categoryService.list()
                    .then((response) => {
                        this.categories = response.data;
                        this.categories.forEach(this.loadOptions)
                    })
                    .catch((response) => {
                        console.log(response.data)
                    })
            },
            loadOptions(item) {
                this.options.push({'value' : item.id, 'text' : item.description})
            },
            getFiles(files){
                console.log(files);
            },
            receiveFileInfo(v) {
                // console.log(v)
                this.fileInfo = v
                v &&  this.uploadImage() //上传
            },
            sizeError(v) {
                v && alert('Arquivo muito grande')
            },
            typeError(v) {
                v && alert('Tipo de imagem não aceito')
            },
            uploadImage() {
                if (this.fileInfo) {
                    this.product.img = this.fileInfo.base64
                    this.product.img = this.product.img.replace('data:image/jpeg;base64,', '')
                }
            }
        },
        mounted() {
            this.loadCategories()
        }
    }
</script>

<style scoped>

</style>