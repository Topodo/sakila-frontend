<template>
    <div>
        <h5>{{ `${actor.first_name} ${actor.last_name}` }}</h5>
    </div>
</template>

<script>
    export default {
        name: "Actor",
        props: ['actor']
    }
</script>

<style scoped>

</style>