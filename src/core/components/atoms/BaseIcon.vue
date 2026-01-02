<script setup lang="ts">
import { ICON_LIBRARY, type IconName } from '@/core/constants/icons.ts'
import { computed } from 'vue'

const props = defineProps<{
  name: IconName
  size?: string | number
}>()

const iconComponent = computed(() => ICON_LIBRARY[props.name])

const iconSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size || '24px',
)
</script>

<template>
  <span class="base-icon" :style="{ width: iconSize, height: iconSize }">
    <component :is="iconComponent" v-if="iconComponent" />
  </span>
</template>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  color: inherit;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>
