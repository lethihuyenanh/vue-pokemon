<template>
  <the-header></the-header>
  <base-card>
    <base-snipper v-if="isLoading"></base-snipper>
    <pokemon-list  v-else :results="results"></pokemon-list>
  </base-card>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import PokemonList from './pages/pokemon/PokemonList.vue';

export default {
  components: {
    TheHeader,
    PokemonList,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchPokemonData() {
      this.isLoading = true;
      const response = await fetch('https://api.eien-development.com/api/pokemon-api/pokemons');
      const responseData = await response.json();

      if (!response.ok) {
        // console.log(responseData);
        const error = new Error(responseData.message || 'Failed to fetch requests.')
        throw error;
      }
      // console.log(responseData.data);

      const results = [];

      for (const id in responseData.data) {
        results.push({
          id         : responseData.data[id].id,
          number     : responseData.data[id].number,
          name       : responseData.data[id].name,
          type_1     : responseData.data[id].type_1,
          type_2     : responseData.data[id].type_2,
          total      : responseData.data[id].total,
          hp         : responseData.data[id].hp,
          attack     : responseData.data[id].attack,
          defense    : responseData.data[id].defense,
          sp_atk     : responseData.data[id].sp_atk,
          sp_def     : responseData.data[id].sp_def,
          speed      : responseData.data[id].speed,
          generation : responseData.data[id].generation,
          legendary  : responseData.data[id].legendary,
        })
      }
      
      this.isLoading = false;

      this.results = results;
      // console.log(this.results);
    }
  },
  mounted() {
    this.fetchPokemonData();
  }
}
</script>

<style>
:root {
  --orange-50 :#fff7ed;
  --orange-100 :#ffedd5;
  --orange-200 :#fed7aa;
  --orange-300 :#fdba74;
  --orange-400 :#fb923c;
  --orange-500 :#f97316;
  --orange-600 :#ea580c;
  --orange-700 :#c2410c;
  --orange-800 :#9a3412;
  --orange-900 :#7c2d12;
  --orange-950 :#431407;

  --purple-50 : #faf5ff;
  --purple-100 : #f3e8ff;
  --purple-200 : #e9d5ff;
  --purple-300 : #d8b4fe;
  --purple-400 : #c084fc;
  --purple-500 : #a855f7;
  --purple-600 : #9333ea;
  --purple-700 : #7e22ce;
  --purple-800 : #6b21a8;
  --purple-900 : #581c87;
  --purple-950 : #3b0764;

  --slate-600: #475569;
  --gray-600: #4b5563;
  --zinc-600: #52525b;
  --neutral-600: #525252;
  --stone-600: #57534e;
  --red-600: #dc2626;
  /* --orange-600: #ea580c; */
  --amber-600: #d97706;
  --yellow-600: #ca8a04;
  --lime-600: #65a30d;
  --green-600: #16a34a;
  --emerald-600: #059669;
  --teal-600: #0d9488;
  --cyan-600: #0891b2;
  --sky-600: #0284c7;
  --blue-600: #2563eb;
  --indigo-600: #4f46e5;
  --violet-600: #7c3aed;
  /* --purple-600: #9333ea; */
  --fuchsia-600: #c026d3;
  --pink-600: #db2777;
  --rose-600: #e11d48;

  --mdMin: 1025px;
  --mdMax: 1024px;
  --smMin: 768px;
  --smMax: 767px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.bgColor-name {
  background-color: var(--amber-600);
}
.bgColor-number {
  background-color: var(--gray-600);
}
.bgColor-type_1 {
  background-color: var(--orange-400);
}
.bgColor-type_2 {
  background-color: var(--orange-800);
}
.bgColor-total {
  background-color: var(--lime-600);
}
.bgColor-hp {
  background-color: var(--emerald-600);
}
.bgColor-attack {
  background-color: var(--red-600);
}
.bgColor-defense {
  background-color: var(--cyan-600);
}
.bgColor-sp_atk {
  background-color: var(--purple-400);
}
.bgColor-sp_def {
  background-color: var(--purple-800);
}
.bgColor-speed {
  background-color: var(--violet-600);
}
.bgColor-generation {
  background-color: var(--pink-600);
}
.bgColor-legendary {
  background-color: var(--lime-600);
}

.list {
  display: flex;
  flex-wrap: wrap;
  margin: 10px -5px;
}

.list li {
  display: flex;
  width: calc(25% - 10px);
  margin: 5px;
  color: #FFF;
  position: relative;
}

@media screen and (max-width: 1024px) {
  .list li {
    width: calc(33.33% - 10px);
  }
}

@media screen and (max-width: 767px) {
  /* .list li {
    width: 100%
  } */
}

.list label {
  display: block;
  width: 100%;
  padding: 0.1em;
  padding-left: 30px;
  border-radius: 3px;
  box-shadow: 2px 2px 5px rgba(0,0, 0, 0.5);
  transition: box-shadow 0.3s ease-out;
}
.list input {
  /* margin-right: 5px; */
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.list input:checked + label {
  box-shadow: 3px 3px 5px 2px rgba(0,0, 0, 0.5) inset;
}

</style>
