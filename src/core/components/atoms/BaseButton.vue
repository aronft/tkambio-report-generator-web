<script setup lang="ts">
interface Props {
  variant?: 'secondary'
}
withDefaults(defineProps<Props>(), {
  variant: 'secondary',
})
</script>

<template>
  <button v-bind="$attrs" :class="['button', `button--${variant}`]"><slot /></button>
</template>

<style scoped lang="scss">
.button {
  --button-bg-color: transparent;
  --button-text-color: currentColor;
  border: none;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3.125rem;
  padding-block: 1rem;
  padding-inline: 3rem;
  font-size: variables.$fs-16;
  font-weight: 400;
  cursor: pointer;

  &:disabled {
    --button-bg-color: var(--gray-color-100);
    --button-text-color: var(--gray-color-900);
    box-shadow: none;
    cursor: default;
  }

  &--secondary {
    --button-bg-color: var(--secondary-color);
    --button-text-color: var(--gray-color-900);
  }
}
</style>
