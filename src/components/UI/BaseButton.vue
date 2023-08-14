<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  padding: 1em 1em;
  color: #FFF;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease-out;
  will-change: auto;
}
button:active,
button:hover {
  transform: scale(1.05);
}
</style>