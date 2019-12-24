<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    /* eslint-disable */

    import Actors from "@/components/actor_components/actors_list/Actors";
    import Films from '@/components/film_components/films_list/Films'

    export default {
        name: 'app',
        components: {
            Films
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
