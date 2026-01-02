<script setup>
import { ref } from 'vue'
import BaseInput from './BaseInput.vue'
import BaseIcon from './BaseIcon.vue'

defineProps(['label', 'modelValue'])
</script>

<template>
  <BaseInput :label="label" @click="openPicker" class="date-picker">
    <template #default>
      <input
        ref="inputRef"
        type="date"
        class="date-input"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </template>

    <template #suffix>
      <BaseIcon name="calendar" size="20" @click="openPicker" class="date-picker__icon" />
    </template>
  </BaseInput>
</template>

<style scoped lang="scss">
.date-picker {
  &:focus-within {
    .date-picker__icon {
      color: var(--primary-color);
    }
  }
  &__icon {
    color: var(--gray-color-600);
  }
}
.date-input {
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  color: inherit;
  font-family: inherit;

  &::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
}
</style>
