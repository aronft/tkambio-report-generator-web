import { defineStore } from 'pinia'
import type { AuthState } from '../types/auth.types'
import { ref } from 'vue'
import { authService } from '../services/auth.service'
import type { AxiosError } from 'axios'
import { USER_TOKEN } from '../auth.constants'

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref(false)
  const errorMessage = ref<string | null>(null)

  const tokenExistente = localStorage.getItem(USER_TOKEN)
  const authState = ref<AuthState>({
    token: tokenExistente,
    status: tokenExistente ? 'loading' : 'unauthenticated',
    user: null,
  })

  async function checkAuth() {
    if (!authState.value.token) return

    try {
      const user = await authService.verifyToken()
      authState.value.status = 'authenticated'
      authState.value.user = user
    } catch (error) {
      console.error('check failed:', error)
      logout()
    }
  }

  async function login(credentials: { email: string; password: string }) {
    isLoading.value = true
    try {
      const response = await authService.login(credentials)
      authState.value = {
        user: null,
        token: response.access_token,
        status: 'authenticated',
      }
      localStorage.setItem(USER_TOKEN, response.access_token)
    } catch (baseError: unknown) {
      const error = baseError as AxiosError<{ message: string }>
      if (error.response) {
        errorMessage.value = error.response.data.message
      }
      throw error
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    authState.value = {
      user: null,
      token: null,
      status: 'unauthenticated',
    }
    localStorage.removeItem(USER_TOKEN)
  }

  return {
    isLoading,
    authState,
    errorMessage,
    login,
    checkAuth,
    logout,
  }
})
