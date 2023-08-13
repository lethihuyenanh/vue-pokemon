<template>
  <h1>Pokemon test</h1>
  <pokemon-list></pokemon-list>
</template>

<script>
import PokemonList from './components/pokemon/PokemonList.vue';
export default {
  components: {
    PokemonList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
.tag {
  display: inline-block;
  padding: 0.25em 0.5em;
  background-color: #f1f1f1;
  border-radius: 3px;
  font-size: 80%;
  margin: 0.2em;
}
.tag b {
  font-size: 120%;
}
</style>
