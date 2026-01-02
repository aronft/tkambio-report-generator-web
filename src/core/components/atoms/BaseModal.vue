<script lang="ts" setup>
import BaseIcon from './BaseIcon.vue'

interface Props {
  size?: 'small' | 'large'
  contentClass?: string
}

withDefaults(defineProps<Props>(), {
  size: 'large',
})

defineEmits(['close'])
</script>
<template>
  <div :class="['modal', `modal--${size}`]">
    <div class="modal__transparency" @click="$emit('close')"></div>
    <div :class="['modal__content', contentClass]">
      <div class="modal__header">
        <button @click="$emit('close')" type="button" class="modal__close-button">
          <BaseIcon name="close" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  --modal-size: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &--small {
    --modal-size: 24rem;
  }
  &--large {
    --modal-size: 40rem;
  }

  &__transparency {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    width: 100%;
    max-width: var(--modal-size);
    z-index: 1;
    padding-block: 1.875rem;
    padding-inline: 1.46rem;
    background-color: var(--bg-color);
    border-radius: 0.625rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  &__header {
    display: flex;
    justify-content: flex-end;
  }

  .modal__close-button {
    cursor: pointer;
  }
}
</style>
