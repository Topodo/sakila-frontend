<template>
    <div class="container-sm">
        <br>
        <h1 class="bd-title"> Registrar Película </h1>
        <br>
        <b-form @submit="submit">
            <b-form-group id="title_group" label="Título" label-for="title" class="text-left">
                <b-form-input id="title" v-model="data.title" placeholder="Ingrese el título de la película"
                              required/>
            </b-form-group>
            <b-form-group id="description_group" label="Descripción" label-for="description" class="text-left">
                <b-form-textarea id="description" v-model="data.description" placeholder="Descripción de la película"
                                 required rows="4"/>
            </b-form-group>
            <div class="row">
                <b-form-group class="col-md-4 text-left" id="rating_group" label="Clasificación" label-for="rating">
                    <b-select id="rating" v-model="data.rating" :options="ratings" required>
                        <template v-slot:first>
                            <option :value="null" disabled>Seleccione una clasificación de edad</option>
                        </template>
                    </b-select>
                </b-form-group>
                <b-form-group class="col-md-4 text-left" id="duration_group" label="Duración (en minutos)" label-for="duration">
                    <b-input type="number" id="duration" v-model="data.length" required/>
                </b-form-group>
                <b-form-group class="col-md-4 text-left" id="year_group" label="Año de estreno" label-for="year">
                    <b-input type="number" id="year" v-model="data.release_year" required/>
                </b-form-group>
            </div>
            <b-button type="submit" variant="success">Registrar película</b-button>
        </b-form>
        <br>
        <div v-if="submitted" class="col-12 col-md-6 offset-md-3">
            <b-alert variant="success" :show="created" dismissible fade>Actor registrado correctamente.</b-alert>
            <b-alert variant="danger" :show="!created" dismissible fade>Error al registrar actor. Inténtelo
                nuevamente.
            </b-alert>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateFilm",
        data: function () {
            return {
                data: {
                    title: '',
                    description: '',
                    release_year: 2000,
                    rental_duration: 0,
                    rental_rate: 0.0,
                    length: 60,
                    replacement_cost: 0.0,
                    rating: null,
                    fulltext: ''
                },
                submitted: false,
                created: false,
                ratings: [
                    {value: 'G', text: 'G'},
                    {value: 'PG', text: 'PG'},
                    {value: 'PG-13', text: 'PG-13'},
                    {value: 'R', text: 'R'},
                    {value: 'NC-17', text: 'NC-17'}
                ],
            }
        },
        methods: {
            submit: function (event) {
                event.preventDefault()
                this.$http.post(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/films/new/`, this.data)
                    .then(() => {
                        this.created = true
                        this.submitted = true
                    })
                    .catch(() => {
                        this.created = false
                        this.submitted = true
                    })
            }
        }
    }
</script>

<style scoped>
</style>