<template>
  <teleport to="body">
    <div @click="$emit('close')" class="overlay"></div>
    <transition name="dialog">
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
            <base-button @click="$emit('close')" mode="default">Close</base-button>
          </slot>
        </menu>
      </dialog>
    </transition>
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

<style>
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
  text-align: center;
}

@media screen and (min-width: 768px) {
  .dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

.dialog header {
  font-weight: 700;
  font-size: 150%;
  color: #FFF;
  background-color: var(--amber-600);
  padding: 0.5em 0;
}

.dialog menu {
  border-top: 1px solid var(--amber-600);
  margin-top: 1.5rem;
  padding: 0.5rem 0;
}

.dialog figure {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog .number {
  color: var(--amber-600);
  font-size: 1.6rem;
  font-weight: 700;
  opacity: 0.65;
}

.dialog .total {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: var(--lime-600);
}

.dialog .total b {
  font-size: 1.6rem;
}

.dialog-enter-from {
  opacity: 0;
  transform: scale(0);
}
.dialog-enter-active {
  transition: 0.3s ease-out;
}
.dialog-enter-to {
  opacity: 1;
  transform: scale(1);
}

.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
.dialog-leave-active {
  transition: 0.3s ease-in;
}
.dialog-leave-to {
  opacity: 0;
  transform: scale(0);
}
/* .dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.5s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
} */
</style>
