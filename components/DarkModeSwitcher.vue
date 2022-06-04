<template>
  <ColorScheme>
    <button
      @click="toggleDark"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 transition ease-in-out rounded-lg hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Toggle dark mode</span>

      <svg
        v-show="isDark"
        class="w-6 h-6 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>

      <svg
        v-show="isLight"
        class="w-6 h-6 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    </button>
  </ColorScheme>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const isLight = computed(() => colorMode.value === 'light')

function toggleDark() {
  if (isDark.value) {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>
