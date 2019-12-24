<template>
    <div class="border-bottom-imp border-green-imp">
        <img :src="'https://robohash.org/' + title + '?size=70x70'" alt="" class="rounded-circle img"/>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Título: </h5>
            <p>{{ title }}</p>
        </div>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Descripción de la película: </h5>
            <p>{{ description }}</p>
        </div>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Año de estreno: </h5>
            <p>{{ releaseYear }}</p>
        </div>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Semanas en carteleras: </h5>
            <p>{{ rentalDuration }}</p>
        </div>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Duración de la película: </h5>
            <p>{{ length }} minutos</p>
        </div>
        <div class="flex-row-reverse">
            <h5 class="font-weight-bold">Clasificación: </h5>
            <p>{{ rating }}</p>
        </div>
        <div class="flex-row">
            <router-link :to="{ name: 'get_actors_of_the_film', params: {film_id: this.filmId}}">
                <a class="btn btn-success">
                    Actores que participaron en la película
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */

    export default {
        name: "Film",
        props: ['film'],
        data: function () {
            return {
                filmId: 0,
                title: '',
                description: '',
                releaseYear: '',
                rentalDuration: 0,
                rentalRate: 0.0,
                length: 0,
                replacementCost: 0.0,
                rating: ''
            }
        },
        created: function () {
            this.mapPropsToData()
        },
        methods: {
            formatTitle: function (title) {
                console.log(title)
                let splitedTitle = title.split(' ')
                let formattedTitle = splitedTitle[0][0]
                for (let i = 1; i < splitedTitle[0].length; i++) {
                    formattedTitle += splitedTitle[0][i].toLowerCase()
                }
                formattedTitle += ` ${splitedTitle[1][0]}`
                for (let i = 1; i < splitedTitle[1].length; i++) {
                    formattedTitle += splitedTitle[1][i].toLowerCase()
                }
                return formattedTitle
            },
            mapPropsToData: function () {
                this.filmId = this.film.film_id
                this.title = this.formatTitle(this.film.title)
                this.description = this.film.description
                this.releaseYear = this.film.release_year
                this.rentalDuration = this.film.rental_duration
                this.rentalRate = this.film.rental_rate
                this.length = this.film.length
                this.replacementCost = this.film.replacement_cost
                this.rating = this.film.rating
            }
        }
    }
</script>

<style>
    .img {
        border: groove green;
        margin-bottom: 10px;
    }

    .border-green-imp {
        border-color: green !important;
    }

    .border-bottom-imp {
        margin-right: 1em;
        border-bottom: 2px groove green !important;
    }

    .flex-row {
        padding: 1rem !important;
    }

    .btn-success {
        color: white !important;
    }
</style>