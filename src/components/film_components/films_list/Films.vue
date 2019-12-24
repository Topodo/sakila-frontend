<template>
    <div>
        <h1 class="display-1 font-weight-bolder font-italic"> Películas </h1>
        <br>
        <br>
        <div class="row d-flex justify-content-center">
            <div v-if="isFetched" class="col-md-6">
                <div v-for="(film, index) in films" v-bind:key="index">
                    <Film v-bind:film="film"/>
                </div>
            </div>
            <!--
                If data is not fetched yet, DOM shows three loading components
            -->
            <div class="center-div" v-else>
                <LoaderBar/>
            </div>
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
                isFetched: false
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
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/${this.$route.params.actor_id}/films/`)
                        .then(response => {
                            this.films = response.body
                            this.isFetched = true
                        })
                } else {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/films/`)
                        .then(response => {
                            this.films = response.body
                            this.isFetched = true
                        })
                }
            },
        }
    }
</script>

<style scoped>

</style>