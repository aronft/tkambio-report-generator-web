<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <a v-bind="$attrs" class="link">
    <slot />
  </a>
</template>

<style scoped lang="scss">
.link {
  color: currentColor;
  text-decoration: none;
}
</style>
