<template>
  <div>
    <div
      class="flex items-center justify-between px-3 pt-6 pb-6 border-b border-gray-900 sm:border-transparent xl:px-1"
    >
      <!-- nav menu -->
      <div class="flex items-center space-x-0 sm:space-x-8">
        <div class="mr-0 sm:mr-3">
          <logo />
        </div>

        <nuxt-link
          to="/work"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-hijau focus:border-hijau focus:outline-none hover:border-hijau"
          >work</nuxt-link
        >
        <nuxt-link
          to="/about"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-hijau focus:border-hijau focus:outline-none hover:border-hijau"
          >about</nuxt-link
        >
        <nuxt-link
          to="/contact"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-hijau focus:border-hijau focus:outline-none hover:border-hijau"
          >contact</nuxt-link
        >
      </div>

      <!-- social icon -->
      <div class="items-center hidden space-x-4 sm:flex">
        <a
          :href="linkedin_url"
          target="_blank"
          rel="noreferrer noopener"
          class="hidden focus:outline-none sm:block"
          ><span class="sr-only">linkedin</span>
          <svg
            class="w-4 h-4 text-black transition duration-300 ease-in-out fill-current hover:text-hijau"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
          </svg>
        </a>
        <a
          :href="github_url"
          target="_blank"
          rel="noreferrer noopener"
          class="hidden focus:outline-none sm:block"
          ><span class="sr-only">github</span>
          <svg
            class="w-4 h-4 ml-2 text-black transition duration-300 ease-in-out fill-current hover:text-hijau"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
            />
          </svg>
        </a>
      </div>

      <!-- hamburger menu -->
      <div class="block pt-2 sm:hidden">
        <button
          class="hamburger hamburger--spring focus:outline-none"
          :class="{ 'is-active': isOpen }"
          type="button"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>

    <!-- mobile menu -->
    <transition
      enter-active-class="transition-all duration-150 ease-out delay-100"
      leave-active-class="transition-all duration-150 ease-in delay-100"
      enter-class="opacity-0 scale-70"
      enter-to-class="scale-100 opacity-100"
      leave-class="scale-100 opacity-100"
      leave-to-class="opacity-0 scale-70"
    >
      <div
        v-if="isOpen"
        tabindex="0"
        class="flex flex-col items-center min-h-screen px-3 pt-3 space-y-3 text-center sm:hidden focus:outline-none origintop"
        @keydown.esc="isOpen = false"
      >
        <nuxt-link
          active-class="text-hijau"
          to="/work"
          class="w-full pt-1 pb-3 transition duration-300 ease-in-out border-b border-gray-300 hover:text-hijau focus:outline-none focus:text-hijau"
          @click.native="visit()"
          >work</nuxt-link
        >
        <nuxt-link
          active-class="text-hijau"
          to="/about"
          class="w-full pt-1 pb-3 transition duration-300 ease-in-out border-b border-gray-300 hover:text-hijau focus:outline-none focus:text-hijau"
          @click.native="visit()"
          >about</nuxt-link
        >
        <nuxt-link
          active-class="text-hijau"
          to="/contact"
          class="w-full pt-1 pb-3 transition duration-300 ease-in-out border-b border-gray-300 hover:text-hijau focus:outline-none focus:text-hijau"
          @click.native="visit()"
          >contact</nuxt-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      isOpen: false,
      github_url: process.env.SOCIAL_GITHUB_URL,
      linkedin_url: process.env.SOCIAL_LINKEDIN_URL
    }
  },
  methods: {
    visit() {
      this.$nextTick(() => (this.isOpen = false))
    }
  }
}
</script>
