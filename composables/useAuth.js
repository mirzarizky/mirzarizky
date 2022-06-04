import { useAuthStore } from '~~/store/auth'
import { computed } from 'vue'

export const useAuth = () => {
  const store = useAuthStore()

  const isLoggedin = computed(() => store.isLoggedin)

  function login() {
    store.$patch(state => {
      state.isLoggedin = true
    })
  }

  function logout() {
    store.clearLogin()
  }

  return { isLoggedin, login, logout }
}
