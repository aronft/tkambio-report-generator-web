<script setup lang="ts">
import Header from '../Header.vue'
</script>

<template>
  <div v-bind:$attrs class="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  flex: 1;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
