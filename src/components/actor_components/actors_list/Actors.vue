<template>
    <div class="container">
        <div class="row">
            <div v-if="isFetched" class="col-md-12 text-center">
                <paginate ref="paginator" name="actors" :list="actors" :per="15">
                    <div v-for="actor in paginated('actors')" v-bind:key="actor.actor_id">
                        <Actor v-bind:actor="actor"/>
                    </div>
                </paginate>
                <paginate-links for="actors" :show-step-links="true" :simple="{prev: 'Anterior', next: 'Siguiente'}"/>
                <p class="text-center font-weight-bold" v-if="$refs.paginator">
                    Mostrando {{$refs.paginator.pageItemsCount}} resultados.
                </p>
            </div>

            <!--
                If data is not fetched yet, DOM shows three loading components
            -->
            <div v-else>
                <LoaderBar/>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Actor from "@/components/actor_components/actor/Actor"
    import './actors.css'
    import LoaderBar from "@/components/actor_components/utils/loader_bar/LoaderBar";

    export default {
        name: "Actors",
        data: function () {
            return {
                actors: [],
                isFetched: false,
                paginate: ['actors']
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
                this.$http.get(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/`)
                    .then(response => {
                        this.actors = response.body
                        this.isFetched = true
                    })
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
        border-radius: 3px;
    }
    .paginate-links ul {
        margin-left: 40%;
        margin-right: 40%;
        background: green;
    }
</style>