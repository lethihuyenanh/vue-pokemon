<template>
  <base-card>
    <base-snipper v-if="isLoading"></base-snipper>
    <div v-else>
      <section>
        <h2>Pokemon Sort</h2>
        <pokemon-sort></pokemon-sort>
      </section>
      <section>
        <h2>Pokemon List</h2>
        <ul>
          <li v-for="result in results" :key="result" :id="result">
            <h3>{{ result.name }}</h3>
            <div class="badge-list">
              <base-badge mode='bgColor-number' v-if="result.number">number: <b>{{ result.number }}</b></base-badge>
              <base-badge mode='bgColor-type_1' v-if="result.type_1">type_1: <b>{{ result.type_1 }}</b></base-badge>
              <base-badge mode='bgColor-type_2' v-if="result.type_2">type_2: <b>{{ result.type_2 }}</b></base-badge>
              <base-badge mode='bgColor-total' v-if="result.total">total: <b>{{ result.total }}</b></base-badge>
              <base-badge mode='bgColor-hp' v-if="result.hp">hp: <b>{{ result.hp }}</b></base-badge>
              <base-badge mode='bgColor-attack' v-if="result.attack">attack: <b>{{ result.attack }}</b></base-badge>
              <base-badge mode='bgColor-defense' v-if="result.defense">defense: <b>{{ result.defense }}</b></base-badge>
              <base-badge mode='bgColor-sp_atk' v-if="result.sp_atk">sp_atk: <b>{{ result.sp_atk }}</b></base-badge>
              <base-badge mode='bgColor-sp_def' v-if="result.sp_def">sp_def: <b>{{ result.sp_def }}</b></base-badge>
              <base-badge mode='bgColor-speed' v-if="result.speed">speed: <b>{{ result.speed }}</b></base-badge>
              <base-badge mode='bgColor-generation' v-if="result.generation">generation: <b>{{ result.generation
              }}</b></base-badge>
              <base-badge mode='bgColor-legendary' v-if="result.legendary">legendary: <b>{{ result.legendary }}</b></base-badge>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </base-card>
</template>

<script>
import PokemonSort from '../../components/pokemon/PokemonSort.vue';

export default {
  components: {
    PokemonSort,
  },
  props: ['results'],
}
</script>

<style scoped>
section {
  padding-top: 1.5rem;
}
h2 {
  text-align: left;
  color: var(--purple-900);
  border-left: 3px solid var(--purple-900);
  padding-left: 0.5em;
}
h3 {
  text-align: center;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  padding: 10px 0;
}

ul li {
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

@media screen and (max-width: 1024px) {
  /* ul li {
    width: calc(50% - 20px);
  } */
}

@media screen and (max-width: 767px) {
  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    width: 100%;
    margin: 10px 0;
  }
}

.badge-list {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}

.badge-list .badge {
  width: calc(33.33% - 6px);
  margin: 3px;
}

@media screen and (max-width: 1024px) {
  .badge-list .badge {
    width: calc(50% - 6px);
  }
}
</style>