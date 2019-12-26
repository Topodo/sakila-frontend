<template>
    <div class="container-fluid">
        <h1 class="display-1 font-weight-bolder font-italic"> Actores </h1>
        <br>
        <br>
        <div v-if="isFetched" class="row">
            <div class="col-12 col-sm-6 col-md-3" v-for="(actor, index) in actors" v-bind:key="index">
                <Actor v-bind:actor="actor"/>
            </div>
        </div>
        <!--
            If data is not fetched yet, DOM shows three loading components
        -->
        <div class="center-div" v-else>
            <LoaderBar/>
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
                chunkedActors: [[]],
                actors: [],
                isFetched: false,
            }
        },
        components: {
            Actor,
            LoaderBar
        },
        created: function () {
            this.fetchData()
        },
        methods: {
            fetchData: function () {
                // Validates if the URL is and index of actors or actors of a film
                if (this.$route.params.film_id) {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/films/${this.$route.params.film_id}/actors/`)
                        .then(response => {
                            this.actors = response.body
                            this.chunkedActors = this.chunkActors(response.body)
                            this.isFetched = true
                        })
                } else {
                    this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/`)
                        .then(response => {
                            this.actors = response.body
                            this.chunkedActors = this.chunkActors(response.body)
                            this.isFetched = true
                        })
                }
            },
            chunkActors: function (actors) {
                let chunked_arr = [];
                let index = 0;
                while (index < actors.length) {
                    chunked_arr.push(actors.slice(index, 5 + index));
                    index += 3;
                }
                return chunked_arr;
            }
        }
    }
</script>

<style>
    .container-fluid {
        width: 80% !important;
    }
</style>