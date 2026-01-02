<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
  modelValue: string | number
  containerClass?: string
}
const props = defineProps<Props>()
const inputRef = ref<HTMLInputElement | null>(null)
const emit = defineEmits(['update:modelValue'])

const focusInput = () => {
  inputRef.value?.focus()
}

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div :class="[$attrs.class, containerClass, 'field-container']" @click="focusInput">
    <label for="">{{ label }}</label>
    <slot>
      <input
        v-bind="$attrs"
        ref="inputRef"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="input"
      />
    </slot>
    <div class="field-suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.field-container {
  @include input-style;
}
</style>
