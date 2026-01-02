<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from '@/core/components/atoms/BaseIcon.vue'
import BaseInput from '@/core/components/atoms/BaseInput.vue'

const props = defineProps<{
  label: string
}>()

const model = defineModel<string>({ required: true })

defineOptions({
  inheritAttrs: false,
})

const isShowingPassword = ref(false)

function togglePassword() {
  isShowingPassword.value = !isShowingPassword.value
}
</script>

<template>
  <BaseInput
    v-model="model"
    v-bind="$attrs"
    :label="label"
    :type="isShowingPassword ? 'text' : 'password'"
  >
    <template #suffix>
      <button @click="togglePassword" type="button">
        <BaseIcon :name="isShowingPassword ? 'eye-off' : 'eye'" size="20" />
      </button>
    </template>
  </BaseInput>
</template>
