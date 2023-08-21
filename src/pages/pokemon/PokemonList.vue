<template>
  <base-dialog v-if="pokemonIsDetail" @close="closeDialog" :title="detailResults.name">
    <template #default>
      <figure>
        <base-snipper v-if="pokemonImgIsLoading"></base-snipper>
        <img v-else :src="detailResults.img" alt="">
      </figure>
      <p class="number">#{{ detailResults.number }}</p>
      <p class="total">TOTAL: <b>{{ detailResults.total }}</b></p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">Close</base-button>
    </template>
  </base-dialog>
  <div>
    <base-section>
      <h2 ref="targetRef1">Pokemon Sort</h2>
      <pokemon-sort @change-sort="setSort"></pokemon-sort>
      <pokemon-filter @change-filter="setFilters"></pokemon-filter>
      <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    </base-section>
    <base-section>
      <h2 ref="targetRef2">Pokemon List</h2>
      <ul class="items-wrapper" v-if="hasPokemon">
        <li v-for="pokemon in sortedPokemons" :key="pokemon.id" :id="pokemon.id"
          @click="pokemonDetail(pokemon.id, pokemon.number, pokemon.name, pokemon.total)">
          <figure><img src="../../assets/images/img_default.png" alt="" width="100" height="100" decoding="async" />
          </figure>
          <h3>{{ pokemon.name }}</h3>
          <p class="tag-number" :status="sorting === 'number' ? 'active' : ''" v-if="pokemon.number">#{{ pokemon.number }}
          </p>
          <div class="badge-list">
            <base-badge :status="sorting === 'type_1' ? 'active' : ''" mode="bgColor-type_1" v-if="pokemon.type_1">type_1:
              <b>{{ pokemon.type_1 }}</b></base-badge>
            <base-badge :status="sorting === 'type_2' ? 'active' : ''" mode="bgColor-type_2" v-if="pokemon.type_2">type_2:
              <b>{{ pokemon.type_2 }}</b></base-badge>
            <base-badge :status="sorting === 'total' ? 'active' : ''" mode="bgColor-total" v-if="pokemon.total">total:
              <b>{{ pokemon.total }}</b></base-badge>
            <base-badge :status="sorting === 'hp' ? 'active' : ''" mode="bgColor-hp" v-if="pokemon.hp">hp: <b>{{
              pokemon.hp }}</b></base-badge>
            <base-badge :status="sorting === 'attack' ? 'active' : ''" mode="bgColor-attack" v-if="pokemon.attack">attack:
              <b>{{ pokemon.attack }}</b></base-badge>
            <base-badge :status="sorting === 'defense' ? 'active' : ''" mode="bgColor-defense"
              v-if="pokemon.defense">defense: <b>{{ pokemon.defense }}</b></base-badge>
            <base-badge :status="sorting === 'sp_atk' ? 'active' : ''" mode="bgColor-sp_atk" v-if="pokemon.sp_atk">sp_atk:
              <b>{{ pokemon.sp_atk }}</b></base-badge>
            <base-badge :status="sorting === 'sp_def' ? 'active' : ''" mode="bgColor-sp_def" v-if="pokemon.sp_def">sp_def:
              <b>{{ pokemon.sp_def }}</b></base-badge>
            <base-badge :status="sorting === 'speed' ? 'active' : ''" mode="bgColor-speed" v-if="pokemon.speed">speed:
              <b>{{ pokemon.speed }}</b></base-badge>
            <base-badge :status="sorting === 'generation' ? 'active' : ''" mode="bgColor-generation"
              v-if="pokemon.generation">generation: <b>{{ pokemon.generation }}</b></base-badge>
            <base-badge :status="sorting === 'legendary' ? 'active' : ''" mode="bgColor-legendary"
              v-if="pokemon.legendary">legendary: <b>{{ pokemon.legendary }}</b></base-badge>
          </div>
        </li>
      </ul>
      <p v-else class="empty">There is no Pokemon!</p>
    </base-section>
  </div>
</template>

<script>
import PokemonSort from "../../components/pokemon/PokemonSort.vue";
import PokemonFilter from "../../components/pokemon/PokemonFilter.vue";

export default {
  components: {
    PokemonSort,
    PokemonFilter,
  },
  props: ["results"],
  data() {
    return {
      activeFilters: {
        type_1: true,
        type_2: true,
      },
      sorting: null,
      pokemonIsDetail: false,
      pokemonImgIsLoading: true,
      detailResults: {
        img: null,
        name: null,
        number: null,
        total: null,
      },
      enteredSearchTerm: '', //user typing the text
      activeSearchTerm: '', //
    };
  },
  computed: {
    availablePokemons() {
      // const pokemons = this.results;
      // return pokemons.filter((item) => {
      //   if (this.activeFilters.type_1 && !!item.type_1 > 0) {
      //     return true;
      //   }
      //   if (this.activeFilters.type_2 && !!item.type_2 > 0) {
      //     return true;
      //   }
      //   return false;
      // });
      let filtered = this.results.filter((item) => {
        if (this.activeFilters.type_1 && !!item.type_1 > 0 && item.name.includes(this.activeSearchTerm)) {
          return true;
        }
        if (this.activeFilters.type_2 && !!item.type_2 > 0 && item.name.includes(this.activeSearchTerm)) {
          return true;
        }
        return false;
      });
      
      return filtered;
    },
    hasPokemon() {
      return this.availablePokemons && this.availablePokemons.length > 0;
    },
    sortedPokemons() {
      if (!this.sorting) {
        return this.availablePokemons;
      }
      return this.availablePokemons.slice().sort((u1, u2) => {
        if (this.sorting === "name" && u1.name > u2.name) {
          return 1;
        } else if (this.sorting === "name") {
          return -1;
        } else if (this.sorting === "number" && u1.number > u2.number) {
          return 1;
        } else if (this.sorting === "number") {
          return -1;
        } else if (this.sorting === "total" && u1.total > u2.total) {
          return 1;
        } else if (this.sorting === "total") {
          return -1;
        } else if (this.sorting === "hp" && u1.hp > u2.hp) {
          return 1;
        } else if (this.sorting === "hp") {
          return -1;
        } else if (this.sorting === "attack" && u1.attack > u2.attack) {
          return 1;
        } else if (this.sorting === "attack") {
          return -1;
        } else if (this.sorting === "defense" && u1.defense > u2.defense) {
          return 1;
        } else if (this.sorting === "defense") {
          return -1;
        } else if (this.sorting === "sp_atk" && u1.sp_atk > u2.sp_atk) {
          return 1;
        } else if (this.sorting === "sp_atk") {
          return -1;
        } else if (this.sorting === "sp_def" && u1.sp_def > u2.sp_def) {
          return 1;
        } else if (this.sorting === "sp_def") {
          return -1;
        } else if (this.sorting === "speed" && u1.speed > u2.speed) {
          return 1;
        } else if (this.sorting === "speed") {
          return -1;
        }
      });
    },
  },
  methods: {
    setFilters(updatedFilter) {
      this.activeFilters = updatedFilter;
      this.$refs.targetRef1.scrollIntoView({ behavior: 'smooth' });
    },
    setSort(itemId) {
      this.sorting = itemId;
      this.$refs.targetRef2.scrollIntoView({ behavior: 'smooth' });
    },
    async pokemonDetail(id, number, name, total) {
      this.pokemonImgIsLoading = true;
      const url = `https://api.eien-development.com/api/pokemon-api/pokemons/${id}/sprite`;
      const response = await fetch(url);

      if (!response.ok) {
        this.detailResults.img = '';
      } else {
        this.pokemonImgIsLoading = false;
        this.detailResults.img = response.url;
      }

      // this.detailResults.img= imgUrl;
      this.detailResults.name = name;
      this.detailResults.number = number;
      this.detailResults.total = total;
      this.pokemonIsDetail = true;
    },
    closeDialog() {
      this.detailResults.img = null;
      this.detailResults.name = null;
      this.detailResults.number = null;
      this.detailResults.total = null;
      this.pokemonIsDetail = false;
    },
    updateSearch(val) {
      this.enteredSearchTerm = val;
      // console.log(this.enteredSearchTerm);
    }
  },
  watch: {
    //Unclear: Why need to check this value
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    }
  }
};
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
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.items-wrapper li:hover,
.items-wrapper li:active {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  border-color:  var(--amber-600);
}

.items-wrapper li figure {
  text-align: center;
  padding: 1rem;
}

.items-wrapper li h3 {
  text-align: center;
  padding: 1rem;
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
  border-top: 1px solid var(--purple-900);
  margin: 1.5rem 0 0;
}

.tag-number {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  font-size: 150%;
  font-weight: 700;
  opacity: 0.65;
}
</style>
