<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: 'div' | 'header' | 'section' | 'footer'
  }>(),
  {
    tag: 'div',
  },
)
</script>

<template>
  <component :is="tag" :class="[$attrs.class, 'container']"> <slot /> </component>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: variables.$mobile;
  margin-inline: auto;
  padding-inline: variables.$s-16;

  @media (min-width: variables.$tablet) {
    max-width: variables.$tablet;
  }

  @media (min-width: variables.$desktop) {
    max-width: variables.$desktop;
  }
}
</style>
