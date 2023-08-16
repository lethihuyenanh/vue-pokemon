<template>
  <ul class="list">
    <li>
      <input type="radio" name="sort" id="number" value="number" @change="setSort" />
      <label for="number">Sort by <b>number</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="total" value="total" @change="setSort" />
      <label for="total">Sort by <b>total</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="hp" value="hp" @change="setSort" />
      <label for="hp">Sort by <b>hp</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="attack" value="attack" @change="setSort" />
      <label for="attack">Sort by <b>attack</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="defense" value="defense" @change="setSort" />
      <label for="defense">Sort by <b>defense</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="sp_atk" value="sp_atk" @change="setSort" />
      <label for="sp_atk">Sort by <b>sp_atk</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="sp_def" value="sp_def" @change="setSort" />
      <label for="sp_def">Sort by <b>sp_def</b></label>
    </li>
    <li>
      <input type="radio" name="sort" id="speed" value="speed" @change="setSort" />
      <label for="speed">Sort by <b>speed</b></label>
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