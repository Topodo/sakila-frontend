<template>
    <div class="center-div">
        <h5 class="font-weight-bolder">Cargando</h5>
        <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    import './loaderBar.css'
    export default {
        name: "LoaderBar"
    }
</script>

<style scoped>

</style>