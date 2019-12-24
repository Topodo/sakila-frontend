<template>
    <div class="container-xl">
        <h1 class="display-1 font-weight-bolder font-italic"> Actores </h1>
        <br>
        <br>
        <div v-if="isFetched" class="text-center">
            <div v-for="(chunk, index) in chunkedActors" v-bind:key="index">
                <div class="row">
                    <div v-for="actor in chunk" v-bind:key="actor.actor_id">
                        <div class="col">
                            <Actor v-bind:actor="actor"/>
                        </div>
                    </div>
                </div>
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
    import LoaderBar from "@/components/utils/loader_bar/LoaderBar";

    export default {
        name: "Actors",
        data: function () {
            return {
                chunkedActors: [[]],
                isFetched: false,
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
                this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/`)
                    .then(response => {
                        this.chunkedActors = this.chunkActors(response.body)
                        this.isFetched = true
                    })
            },
            chunkActors: function (actors) {
                console.log(actors.length)
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
    .paginate-links li {
        display: inline;
        background-color: green;
        color: white;
        text-transform: uppercase;
        font-weight: inherit;
        padding: 0.5rem;
        margin-left: 0.3rem;
        margin-right: 0.3rem;
        cursor: pointer;
        border-radius: 4px;
    }

    .paginate-links ul {
        margin-left: 40%;
        margin-right: 40%;
        background: green;
    }
</style>