<template>
    <div class="container-fluid">
        <h1 class="display-1 font-weight-bolder font-italic"> Actores </h1>
        <br>
        <br>
        <div class="overflow-auto">
            <b-pagination v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                          aria-controls="actors-container"
                          align="center"
                          size="lg"
                          pills
                          @change="onPageChanged"/>
            <p class="mt-3">Página actual: {{ currentPage }}</p>
        </div>
        <div v-if="isFetched" class="row">
            <div id="actors-container" class="col-12 col-sm-6 col-md-3" v-for="(actor, index) in actors"
                 v-bind:key="index">
                <Actor v-bind:actor="actor"/>
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
                          aria-controls="actors-container"
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
    import Actor from "@/components/actor_components/actor/Actor"
    import './actors.css'
    import LoaderBar from "@/components/utils/loader_bar/LoaderBar"

    export default {
        name: "Actors",
        data: function () {
            return {
                actors: [],
                isFetched: false,
                currentPage: 1,
                perPage: 20,
                rows: 0
            }
        },
        components: {
            Actor,
            LoaderBar
        },
        mounted: function () {
            this.fetchData()
        },
        methods: {
            fetchData: function () {
                // Validates if the URL is and index of actors or actors of a film
                if (this.$route.params.film_id) {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/films/${this.$route.params.film_id}/actors/?page=${this.currentPage}`)
                        .then(response => {
                            this.actors = response.body.results
                            this.rows = response.body.count
                            this.isFetched = true
                        })
                } else {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/?page=${this.currentPage}`)
                        .then(response => {
                            this.actors = response.body.results
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
        },
    }
</script>

<style>
    .container-fluid {
        width: 80% !important;
    }
    .page-item.active .page-link {
        background-color: green !important;
        border-color: green !important;
    }
</style>