import { AUTH_ROUTES } from '@/features/auth/auth.constants'
import { authRoutes } from '@/features/auth/auth.routes'
import { useAuthStore } from '@/features/auth/store/auth.store'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('../features/reports/views/ReportView.ts.vue'),
    },
    ...authRoutes,
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (authStore.authState.status === 'loading' && authStore.authState.token) {
    await authStore.checkAuth()
  }

  const isAuthenticated = authStore.authState.status === 'authenticated'

  if (to.name !== AUTH_ROUTES.LOGIN && !isAuthenticated) {
    next({ name: AUTH_ROUTES.LOGIN })
  } else if (to.name === AUTH_ROUTES.LOGIN && isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
