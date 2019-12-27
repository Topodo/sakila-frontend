<template>
    <div class="container-fluid">
        <h1 class="display-1 font-weight-bolder font-italic"> Películas </h1>
        <br>
        <br>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="films-container"
                          align="center"
                          size="lg"
                          pills
                          @change="onPageChanged"/>
            <p class="mt-3">Página actual: {{ currentPage }}</p>
        </div>
        <div v-if="isFetched" class="row">
            <div class="col-12 col-sm-6 col-lg-4" v-for="(film, index) in films" v-bind:key="index">
                <Film v-bind:film="film"/>
            </div>
        </div>
        <!--
            If data is not fetched yet, DOM shows three loading components
        -->
        <div class="center-div" v-else>
            <LoaderBar/>
        </div>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="films-container"
                          align="center"
                          size="lg"
                          pills
                          @change="onPageChanged"/>
            <p class="mt-3">Página actual: {{ currentPage }}</p>
        </div>
    </div>

</template>

<script>
    /* eslint-disable */
    import Film from '@/components/film_components/film/Film'
    import LoaderBar from "@/components/utils/loader_bar/LoaderBar"
    import './films.css'

    export default {
        name: "Films",
        data: function () {
            return {
                films: [],
                isFetched: false,
                currentPage: 1,
                perPage: 20,
                rows: 0
            }
        },
        components: {
            Film,
            LoaderBar
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData: function () {
                // Validates if the URL is and index of films or films of an actor
                if (this.$route.params.actor_id) {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/${this.$route.params.actor_id}/films/?page=${this.currentPage}`)
                        .then(response => {
                            this.films = response.body.results
                            this.rows = response.body.count
                            this.isFetched = true
                        })
                } else {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/films/?page=${this.currentPage}`)
                        .then(response => {
                            this.films = response.body.results
                            this.rows = response.body.count
                            this.isFetched = true
                        })
                }
            },
            onPageChanged: function (page) {
                this.isFetched = false
                this.currentPage = page
                this.fetchData()
            }
        }
    }
</script>

<style>
    .container-fluid {
        width: 90% !important;
    }
</style>