<script setup lang="ts">
import Logo from './atoms/Logo.vue'
import Container from './objets/Container.vue'
</script>

<template>
  <div class="header_wrapper">
    <Container tag="header" class="header">
      <Logo class="header__logo" />
    </Container>
  </div>
</template>

<style scoped lang="scss">
.header_wrapper {
  padding-block: 1.25rem;
  background: linear-gradient(to bottom, #02adf1 0%, var(--primary-color) 100%);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__logo {
    color: var(--bg-color);
  }
}
</style>
