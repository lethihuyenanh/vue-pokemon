<template>
  <ul class="list">
    <li>
      <input type="radio" name="sort" id="number" value="number" @change="setSort" />
      <label  class="bgColor-number" for="number">Sort by <b>number</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="total" value="total" @change="setSort" />
      <label class="bgColor-total" for="total">Sort by <b>total</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="hp" value="hp" @change="setSort" />
      <label class="bgColor-hp" for="hp">Sort by <b>hp</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="attack" value="attack" @change="setSort" />
      <label class="bgColor-attack" for="attack">Sort by <b>attack</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="defense" value="defense" @change="setSort" />
      <label class="bgColor-defense" for="defense">Sort by <b>defense</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="sp_atk" value="sp_atk" @change="setSort" />
      <label class="bgColor-sp_atk" for="sp_atk">Sort by <b>sp_atk</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="sp_def" value="sp_def" @change="setSort" />
      <label class="bgColor-sp_def" for="sp_def">Sort by <b>sp_def</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="speed" value="speed" @change="setSort" />
      <label class="bgColor-speed" for="speed">Sort by <b>speed</b></label>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ['change-sort'],
  methods: {
    setSort(event) {
      const itemId = event.target.id;
      this.$emit('change-sort', itemId);
    }
  }
}
</script>

<style scoped>

</style>