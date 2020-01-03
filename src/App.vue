<template>
    <div id="app">
        <mdb-navbar color="success-color sticky-top" dark>
            <mdb-navbar-brand :to="{name: 'main_page'}">
                <span class="mb-0 h1 font-weight-bold">
                    Sakila
                </span>
            </mdb-navbar-brand>
            <mdb-navbar-toggler>
                <mdb-navbar-nav>
                    <mdb-nav-item class="mb-0 h5" :to="{name: 'main_page'}">
                        Inicio
                    </mdb-nav-item>
                    <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle class="mb-0 h5" tag="a" navLink slot="toggle" waves-fixed>Actores
                        </mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item :to="{name: 'get_actors'}">Ver actores</mdb-dropdown-item>
                            <mdb-dropdown-item :to="{name: 'create_actor'}">Registrar actor</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                    <mdb-dropdown tag="li" class="nav-item">
                        <mdb-dropdown-toggle class="mb-0 h5" tag="a" navLink slot="toggle" waves-fixed>Películas
                        </mdb-dropdown-toggle>
                        <mdb-dropdown-menu>
                            <mdb-dropdown-item :to="{name: 'get_films'}">Ver películas</mdb-dropdown-item>
                            <mdb-dropdown-item :to="{name: 'create_film'}">Registrar película</mdb-dropdown-item>
                        </mdb-dropdown-menu>
                    </mdb-dropdown>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
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

    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
</style>
