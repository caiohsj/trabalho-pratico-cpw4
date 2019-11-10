<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Cadastro
                    <small class="text-muted"> | Produtos</small>
                </h3>
            </div>
        </b-row>

        <b-form>
            <b-form-select
                    class="mb-2 mr-sm-2 mb-sm-0"
                    :value="null"
                    :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                    id="inline-form-custom-select-pref"
            >
                <template v-slot:first>
                    <option :value="null">Choose...</option>
                </template>
            </b-form-select>
            <b-form-group
                    id="input-group-1"
                    label="Email address:"
                    label-for="input-1"
                    description="We'll never share your email with anyone else."
            >
                <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input
                        id="input-2"
                        v-model="form.name"
                        required
                        placeholder="Enter name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                        id="input-3"
                        v-model="form.food"
                        :options="foods"
                        required
                ></b-form-select>
            </b-form-group>

        </b-form>
    </div>
</template>

<script>
    import {BForm, BFormSelect, BFormInput, BFormGroup} from 'bootstrap-vue'
    export default {
        name: "ProductCreate",
        components: {
            BForm,
            BFormSelect,
            BFormInput,
            BFormGroup
        }
    }
</script>

<style scoped>

</style>