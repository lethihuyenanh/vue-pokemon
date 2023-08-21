<template>
  <span class="badge" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['status', 'mode'],
  computed: {
    classes() {
      if (!this.status) {
        return this.mode;
      }
      return this.mode + ' ' + this.status;
    }
  }
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

.badge.active {
  box-shadow: 3px 3px 5px 2px rgba(0,0, 0, 0.5) inset;
}

</style>