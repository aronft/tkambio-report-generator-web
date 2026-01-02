<script setup lang="ts">
import BaseIcon from '@/core/components/atoms/BaseIcon.vue'

interface Props {
  variant?: 'secondary'
  isLoading?: boolean
}
withDefaults(defineProps<Props>(), {
  variant: 'secondary',
  isLoading: false,
})
</script>

<template>
  <button v-bind="$attrs" :class="['button', `button--${variant}`]">
    <slot />
    <BaseIcon v-if="isLoading" class="button__loading" name="progress-activity" />
  </button>
</template>

<style scoped lang="scss">
.button {
  --button-bg-color: transparent;
  --button-text-color: currentColor;
  display: flex;
  gap: 1rem;
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

  .button__loading {
    color: var(--button-text-color);
    animation: spin 1s linear infinite;
  }
}
</style>
