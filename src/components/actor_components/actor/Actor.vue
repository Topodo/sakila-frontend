<template>
    <div class="border-bottom-imp border-green-imp">
        <img :src="'https://robohash.org/' + actor.actor_id + '?size=70x70'" alt="" class="rounded-circle img"/>
        <h5>{{ actorName }}</h5>
        <div class="flex-row">
            <router-link :to="{ name: 'get_films_of_the_actor', params: {id: this.actor.actor_id}}">
                <a class="btn btn-success">
                    Ver sus películas
                </a>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Actor",
        props: ['actor'],
        data: function () {
            return {
                actorName: '',
                filmsRoute: ''
            }
        },
        created: function () {
            this.mapPropsToData()
        },
        methods: {
            formatName: function (firstName, lastName) {
                let formattedName = firstName[0]
                for (let i = 1; i < firstName.length; i++) {
                    formattedName += firstName[i].toLowerCase()
                }
                formattedName += ` ${lastName[0]}`
                for (let i = 1; i < lastName.length; i++) {
                    formattedName += lastName[i].toLowerCase()
                }
                return formattedName
            },
            getFilmsRoute: function () {
                return `/actors/${this.actor.actor_id}/films`
            },
            mapPropsToData: function () {
                this.actorName = this.formatName(this.actor.first_name, this.actor.last_name)
                this.filmsRoute = this.getFilmsRoute()
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
        margin-top: 1em;
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