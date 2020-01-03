<template>
    <div class="container-sm">
        <br>
        <h1 class="bd-title"> Registrar Actor </h1>
        <br>
        <b-form @submit="submit">
            <b-form-group id="first_name_group" label="Nombre" label-for="first_name" class="col-6 offset-3">
                <b-form-input id="first_name" v-model="data.first_name" placeholder="Ingrese el nombre del actor" required />
            </b-form-group>
            <b-form-group id="last_name_group" label="Apellido" label-for="last_name" class="col-6 offset-3">
                <b-form-input id="last_name" v-model="data.last_name" placeholder="Ingrese el apellido del actor" required />
            </b-form-group>
            <b-button type="submit" variant="success">Registrar actor</b-button>
        </b-form>
        <br>
        <div v-if="submitted" class="col-12 col-md-6 offset-md-3">
            <b-alert variant="success" :show="created" dismissible fade>Actor registrado correctamente.</b-alert>
            <b-alert variant="danger" :show="!created" dismissible fade>Error al registrar actor. Inténtelo nuevamente.</b-alert>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateActor",
        data: function () {
            return {
                data: {
                    first_name: '',
                    last_name: ''
                },
                submitted: false,
                created: false
            }
        },
        methods: {
            submit: function (event) {
                event.preventDefault()
                this.$http.post(`${process.env.VUE_APP_API_HOST}:${process.env.VUE_APP_API_PORT}/${process.env.VUE_APP_API_VERSION}/actors/new/`, JSON.stringify(this.data))
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