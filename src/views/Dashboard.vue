<template>
    <div>
        <b-row>
            <div class="col-lg mb-2">
                <h3>Dashboard
                    <small class="text-muted"> | resumo</small>
                </h3>
            </div>
        </b-row>
        <chart v-if="loaded" v-bind:chartdata="chartData"></chart>
    </div>
</template>

<script>
    import {BRow} from 'bootstrap-vue'
    import Chart from "../components/Chart"
    import saleService from "../services/sale"
    export default {
        name: 'dashboard',
        components: {
            Chart,
            BRow
        },
        data() {
            return {
                chartData: {},
                options: {responsive: true},
                loaded: false,
            }
        },
        mounted() {
            this.chart()
        },
        methods: {
            chart(){
                saleService.dashboard()
                    .then((response) => {
                        this.chartData = {
                            labels: [
                                'Janeiro',
                                'Fevereiro',
                                'Março',
                                'Abril',
                                'Maio',
                                'Junho',
                                'Julho',
                                'Agosto',
                                'Setembro',
                                'Outubro',
                                'Novembro',
                                'Dezembro'
                            ],
                            datasets: [
                                {
                                    label: 'Vendas',
                                    backgroundColor: '',
                                    data: response.data
                                }
                            ]
                        }
                        this.loaded = true
                        console.log(response.data)
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
