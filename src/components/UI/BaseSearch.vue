<template>
  <form>
    <input type="search" @input="search" :value="searchTerm" placeholder="Search Pokemon's name">
  </form>
</template>

<script>
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    }
  }
}
</script>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.25rem;
  border: 1px solid var(--gray-600);
}
input:focus {
  outline: none;
  border-color: var(--purple-900);
  background-color: var(--orange-100);
}
</style>