<template>
  <base-card>
    <ul>
      <li v-for="result in results" :key="result" :id="result">
        <h3>{{ result.name }}</h3>
        <div>
          <span class='tag'>number: <b>{{ result.number }}</b></span>
          <span class='tag'>type_1: <b>{{ result.type_1 }}</b></span>
          <span class='tag'>type_2: <b>{{ result.type_2 }}</b></span>
          <span class='tag'>total: <b>{{ result.total }}</b></span>
          <span class='tag'>hp: <b>{{ result.hp }}</b></span>
          <span class='tag'>attack: <b>{{ result.attack }}</b></span>
          <span class='tag'>defense: <b>{{ result.defense }}</b></span>
          <span class='tag'>sp_atk: <b>{{ result.sp_atk }}</b></span>
          <span class='tag'>sp_def: <b>{{ result.sp_def }}</b></span>
          <span class='tag'>speed: <b>{{ result.speed }}</b></span>
          <span class='tag'>generation: <b>{{ result.generation }}</b></span>
          <span class='tag'>legendary: <b>{{ result.legendary }}</b></span>
        </div>
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      results: []
    };
  },
  methods: {
    // fetchPokemonData() {
    //   fetch('https://api.eien-development.com/api/pokemon-api/pokemons')
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     const results = [];
    //     const pokemonData = data.data;
    //     for (const id in pokemonData) {
    //       results.push({
    //         id: pokemonData[id].id,
    //         name: pokemonData[id].name,
    //         attack: pokemonData[id].attack,
    //       });
    //     }
    //     this.results = results;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.error = 'Failed to fetch data';
    //   });
    //   console.log(this.results);
    // }

    async fetchPokemonData() {
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

      this.results = results;
      console.log(this.results);
    }
  },
  mounted() {
    this.fetchPokemonData();
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
ul li {
  width: 31%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0,0,0, 0.1);
  border-radius: 6px;
  padding: 10px 20px 20px;
}
ul li div {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
}

</style>