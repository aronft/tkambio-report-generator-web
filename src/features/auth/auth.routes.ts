import type { RouteRecordRaw } from 'vue-router'
import { AUTH_ROUTES } from './auth.constants'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: AUTH_ROUTES.LOGIN,
    component: () => import('./views/LoginView.ts.vue'),
  },
]
