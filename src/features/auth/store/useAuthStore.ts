import { defineStore } from 'pinia'
import type { AuthState } from '../types'
import { ref } from 'vue'
import { authService } from '../services/auth.service'

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref(false)

  const tokenExistente = localStorage.getItem('user_token')
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
      localStorage.setItem('user_token', response.access_token)
    } catch (error) {
      console.error('Login failed:', error)
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
    localStorage.removeItem('user_token')
  }

  return {
    isLoading,
    authState,
    login,
    checkAuth,
  }
})
