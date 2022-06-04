import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedin: false,
      user: null,
    }
  },

  actions: {
    clearLogin() {
      this.$reset()
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
