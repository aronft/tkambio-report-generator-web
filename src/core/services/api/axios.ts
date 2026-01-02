import { AUTH_ROUTES, USER_TOKEN } from '@/features/auth/auth.constants'
import { useAuthStore } from '@/features/auth/store/auth.store'
import router from '@/router'
import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem(USER_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    const originalRequestUrl = error.config?.url || ''

    const isAuthPage = originalRequestUrl.includes('/auth')

    if (error.response?.status === 401 && !isAuthPage) {
      const authStore = useAuthStore()

      authStore.logout()
      router.push({ name: AUTH_ROUTES.LOGIN })
    }

    return Promise.reject(error)
  },
)

export default api
