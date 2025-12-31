import { useAuthStore } from '@/features/auth/store/useAuthStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      component: () => import('../features/reports/views/ReportView.ts.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../features/auth/views/LoginView.ts.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  if (authStore.authState.status === 'loading' && authStore.authState.token) {
    await authStore.checkAuth()
  }

  const isAuthenticated = authStore.authState.status === 'authenticated'

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
