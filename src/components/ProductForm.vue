<template>
    <div>

        <b-form @submit="prevent" @reset="onReset" v-if="show">
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

            <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>

    </div>
</template>

<script>
    import {BForm, BFormSelect, BFormInput, BFormGroup} from 'bootstrap-vue'
    import Product from '../models/Product'
    export default {
        name: "ProductForm",
        components: {
            BForm,
            BFormSelect,
            BFormInput,
            BFormGroup
        },
        data() {
            return {
                product : new Product()
            }
        }
    }
</script>

<style scoped>

</style>