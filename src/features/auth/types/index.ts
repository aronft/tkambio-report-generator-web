export interface User {
  id: string
  name: string
}

export interface AuthResponse {
  access_token: string
  token_type: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  token: string | null
  status: 'authenticated' | 'unauthenticated' | 'loading'
}
