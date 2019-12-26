<template>
    <div id="app">
        <header class="navbar navbar-expand navbar-dark bg-success sticky-top">
            <router-link :to="{ name: 'main_page' }">
                <a class="navbar-brand">
                    <img src="./assets/camera_logo.png" width="50" height="50" alt="">
                    <p class="mb-0 h1 font-weight-bold font-italic">
                        Sakila
                    </p>
                </a>
            </router-link>
        </header>
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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
