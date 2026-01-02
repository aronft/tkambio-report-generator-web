<script setup lang="ts">
import BaseButton from '@/core/components/atoms/BaseButton.vue'
import BaseInput from '@/core/components/atoms/BaseInput.vue'
import InputPassword from '@/features/auth/components/InputPassword.vue'
import Container from '@/core/components/objets/Container.vue'
import Layout from '@/core/components/objets/Layout.vue'
import { computed, ref } from 'vue'
import { useAuthStore } from '../store/auth.store'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const loginForm = ref({
  email: '',
  password: '',
})

const isValidForm = computed(() => {
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return isValidEmail(loginForm.value.email) && loginForm.value.password !== ''
})

const handleLogin = async () => {
  try {
    await authStore.login(loginForm.value)
    router.push({ name: 'Home' })
  } catch (error) {
    console.error('Error al iniciar sesión', error)
  }
}
</script>

<template>
  <Layout>
    <Container tag="section" class="login">
      <div class="login__promotion">
        <img src="@/assets/images/banner-login.webp" alt="" />
      </div>
      <form class="login__form" @submit.prevent="handleLogin">
        <h1 class="login__title">Inicia sesión</h1>
        <BaseInput label="Correo" v-model="loginForm.email" type="email" required />
        <InputPassword label="Contraseña" v-model="loginForm.password" required />
        <template v-if="authStore.errorMessage">
          <span class="login__error">{{ authStore.errorMessage }}</span>
        </template>
        <BaseButton type="submit" :disabled="!isValidForm">Iniciar sesión</BaseButton>
      </form>
    </Container>
  </Layout>
</template>

<style scoped lang="scss">
.login {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: variables.$tablet) {
    flex-direction: row;
    gap: 4rem;
  }

  &__title {
    margin-bottom: variables.$s-24;
    text-align: center;
  }

  &__promotion {
    display: none;
    max-width: 28.5rem;

    @media (min-width: variables.$tablet) {
      display: block;
      flex: 1;
    }
  }

  &__form {
    max-width: 28rem;
    width: 100%;
    display: flex;
    gap: variables.$s-16;
    flex-direction: column;
    align-items: center;
  }

  &__error {
    margin-left: auto;
    color: var(--error-color);
    font-size: variables.$fs-12;
  }
}
</style>
