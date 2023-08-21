<template>
  <h3>Filter</h3>
  <ul class="list">
    <li>
      <input type="checkbox" name="type_1" id="type_1" checked @change="setFilter" />
      <label class="bgColor-type_1" for="type_1">Filter by <b>type_1</b></label>
    </li>
    <li>
      <input type="checkbox" name="type_2" id="type_2" checked @change="setFilter" />
      <label class="bgColor-type_2" for="type_2">Filter by <b>type_2</b></label>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        type_1: true,
        type_2: true,
      }
    }
  },
  methods: {
    setFilter(event) {
      const itemId = event.target.id;
      const itemStatus = event.target.checked;
      const updatedFilter = {
        ...this.filters,
        [itemId]: itemStatus,
      }
      this.filters = updatedFilter;
      this.$emit('change-filter', updatedFilter);
    }
  }
}
</script>

<style scoped>

</style>