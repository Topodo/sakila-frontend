<template>
  <div id="app">
    <Actors/>
  </div>
</template>

<script>
import Actors from "@/components/actor_components/actors_list/Actors";

export default {
  name: 'app',
  components: {
    Actors
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
