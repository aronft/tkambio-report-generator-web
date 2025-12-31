<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './features/auth/store/useAuthStore';

const authStore = useAuthStore()
onMounted(async () => {
  await authStore.checkAuth()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
