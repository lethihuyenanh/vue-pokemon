<template>
  <teleport to="body">
    <div @click="$emit('close')" class="overlay"></div>
    <dialog class="dialog" open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <base-button @click="$emit('close')">Close</base-button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requred: false,
    },
  },
  emits: ["close"],
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
}
.dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
