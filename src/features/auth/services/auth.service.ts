import api from '@/core/services/api/axios'
import type { AuthResponse, LoginCredentials } from '../types/auth.types'

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>('/auth/login', credentials)
    return data
  },

  async verifyToken() {
    const { data } = await api.get('/auth/me')
    return data
  },
}
