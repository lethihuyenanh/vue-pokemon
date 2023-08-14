<template>
  <base-card>
    <base-snipper v-if="isLoading"></base-snipper>
    <div v-else>
      <section>
        <h2>Pokemon Sort</h2>
        <pokemon-sort></pokemon-sort>
        <pokemon-filter @change-filter="setFilters"></pokemon-filter>
      </section>
      <section>
        <h2>Pokemon List</h2>
        <ul class="items-wrapper" v-if="hasPokemon">
          <li v-for="pokemon in filteredPokemons" :key="pokemon" :id="pokemon">
            <h3>{{ pokemon.name }}</h3>
            <div class="badge-list">
              <base-badge mode='bgColor-number' v-if="pokemon.number">number: <b>{{ pokemon.number }}</b></base-badge>
              <base-badge mode='bgColor-type_1' v-if="pokemon.type_1">type_1: <b>{{ pokemon.type_1 }}</b></base-badge>
              <base-badge mode='bgColor-type_2' v-if="pokemon.type_2">type_2: <b>{{ pokemon.type_2 }}</b></base-badge>
              <base-badge mode='bgColor-total' v-if="pokemon.total">total: <b>{{ pokemon.total }}</b></base-badge>
              <base-badge mode='bgColor-hp' v-if="pokemon.hp">hp: <b>{{ pokemon.hp }}</b></base-badge>
              <base-badge mode='bgColor-attack' v-if="pokemon.attack">attack: <b>{{ pokemon.attack }}</b></base-badge>
              <base-badge mode='bgColor-defense' v-if="pokemon.defense">defense: <b>{{ pokemon.defense }}</b></base-badge>
              <base-badge mode='bgColor-sp_atk' v-if="pokemon.sp_atk">sp_atk: <b>{{ pokemon.sp_atk }}</b></base-badge>
              <base-badge mode='bgColor-sp_def' v-if="pokemon.sp_def">sp_def: <b>{{ pokemon.sp_def }}</b></base-badge>
              <base-badge mode='bgColor-speed' v-if="pokemon.speed">speed: <b>{{ pokemon.speed }}</b></base-badge>
              <base-badge mode='bgColor-generation' v-if="pokemon.generation">generation: <b>{{ pokemon.generation
              }}</b></base-badge>
              <base-badge mode='bgColor-legendary' v-if="pokemon.legendary">legendary: <b>{{ pokemon.legendary }}</b></base-badge>
            </div>
          </li>
        </ul>
        <p v-else class="empty">There is no Pokemon!</p>
      </section>
    </div>
  </base-card>
</template>

<script>
import PokemonSort from '../../components/pokemon/PokemonSort.vue';
import PokemonFilter from '../../components/pokemon/PokemonFilter.vue';

export default {
  components: {
    PokemonSort,
    PokemonFilter,
  },
  props: ['results'],
  data() {
    return {
      activeFilters: {
        type_1: true,
        type_2: true,
      }
    }
  },
  computed: {
    filteredPokemons() {
      const pokemons = this.results;
      return pokemons.filter((item) => {
        if (this.activeFilters.type_1 && !!item.type_1 > 0) {
          return true;
        }
        if (this.activeFilters.type_2 && !!item.type_2 > 0) {
          return true;
        }
        return false;
      });
    },
    hasPokemon() {
      return !this.isLoading && this.filteredPokemons && this.filteredPokemons.length > 0;
    }
  },
  methods: {
    setFilters(updatedFilter) {
      this.activeFilters = updatedFilter;
    }
  }
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
.items-wrapper {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  padding: 10px 0;
}

.items-wrapper li {
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

@media screen and (max-width: 1024px) {
  /* .items-wrapper li {
    width: calc(50% - 20px);
  } */
}

@media screen and (max-width: 767px) {
  .items-wrapper {
    margin: 0;
    padding: 0;
  }

  .items-wrapper li {
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
.empty {
  text-align: center;
  padding: 2rem 0;
}
</style>