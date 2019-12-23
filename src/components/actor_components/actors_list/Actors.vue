<template>
    <div>
        <div v-if="isFetched">
            <div v-for="actor in actors" v-bind:key="actor.actor_id">
                <Actor v-bind:actor="actor"/>
            </div>
        </div>
        <!--
            If data is not fetched yet, DOM shows three loading components
        -->
        <div v-else>
            <LoaderBar/>
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
                isFetched: false
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

<style scoped>

</style>