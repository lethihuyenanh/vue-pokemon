<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  background-color: #FFF;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0, 0.2);
  padding: 20px;
}
@media screen and (max-width: 1024px) {
  section + section {
    margin-top: 2rem;
  }
}
@media screen and (max-width: 767px) {
  section + section {
    /* margin-top: 1rem; */
    border-radius: 8px;
    padding: 1rem;
  }
}
</style>