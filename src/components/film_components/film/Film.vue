<template>
    
</template>

<script>
    export default {
        name: "Film",
        props: ['film'],
        data: function () {
            return {
                title: '',
                description: '',
                release_year: '',
                rental_duration: 0,
                rental_rate: 0.0,
                length: 0,
                replacement_cost: 0.0,
                rating: ''
            }
        }
    }
</script>

<style scoped>

</style>