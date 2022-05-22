import { useStore } from '~~/store/auth'
import { computed } from 'vue'

export const useAuth = () => {
  const store = useStore()

  const isLoggedin = computed(() => store.isLoggedin)

  function login() {
    store.$patch(state => {
      state.isLoggedin = true
    })
  }

  function logout() {
    store.$patch(state => {
      state.isLoggedin = false
    })
  }

  return { isLoggedin, login, logout }
}
