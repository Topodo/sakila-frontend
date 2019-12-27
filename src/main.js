/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import Films from '@/components/film_components/films_list/Films.vue'
import Actors from '@/components/actor_components/actors_list/Actors'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueRouter from "vue-router"
import VuePaginate from 'vue-paginate'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
    Vue.component(component, mdbvue[component])
}

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VuePaginate)

const routes = [
    {
        path: '/',
        name: 'main_page',
        component: Actors
    },
    {
        path: '/actors',
        name: 'get_actors',
        component: Actors
    },
    {
        path: '/films',
        name: 'get_films',
        component: Films
    },
    {
        path: '/actors/:actor_id/films',
        component: Films,
        name: 'get_films_of_the_actor',
        props: true
    },
    {
        path: '/films/:film_id/actors',
        component: Actors,
        name: 'get_actors_of_the_film',
        props: true
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
