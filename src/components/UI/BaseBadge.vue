<template>
  <span class="badge" :class="mode">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['mode'],
}
</script>

<style scoped>
.badge {
  display: inline-flex;
  justify-content: space-between;
  padding: 0.25em 0.5em;
  /* background-color:  var(--gray-600); */
  border-radius: 3px;
  font-size: 80%;
  /* margin: 0.2em; */
  color: #FFF;
  white-space: nowrap;
}
.badge b {
  font-size: 120%;
}

</style>