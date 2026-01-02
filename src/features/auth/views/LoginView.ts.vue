<script setup lang="ts">
import BaseButton from '@/core/components/atoms/BaseButton.vue'
import BaseInput from '@/core/components/atoms/BaseInput.vue'
import InputPassword from '@/features/auth/components/InputPassword.vue'
import Container from '@/core/components/objets/Container.vue'
import Layout from '@/core/components/objets/Layout.vue'
import { ref } from 'vue'

const loginForm = ref({
  email: '',
  password: '',
})
</script>

<template>
  <Layout>
    <Container tag="section" class="login">
      <div class="login__promotion">
        <img src="@/assets/images/banner-login.webp" alt="" />
      </div>
      <form class="login__form">
        <h1 class="login__title">Inicia sesión</h1>
        <BaseInput label="Correo" v-model="loginForm.email" type="email" />
        <InputPassword label="Contraseña" v-model="loginForm.password" />
        <BaseButton type="submit">Iniciar sesión</BaseButton>
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
}
</style>
