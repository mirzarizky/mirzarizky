<template>
  <div>
    <div
      class="flex items-center justify-between px-3 pt-6 pb-6 border-b border-gray-900 sm:border-transparent xl:px-0"
    >
      <!-- nav menu -->
      <div class="flex items-center space-x-0 sm:space-x-8">
        <div class="mr-0 sm:mr-3">
          <logo />
        </div>

        <nuxt-link
          to="/work"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-gray-600 focus:border-hijau focus:outline-none hover:border-hijau"
          >work</nuxt-link
        >
        <nuxt-link
          to="/about"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-gray-600 focus:border-hijau focus:outline-none hover:border-hijau"
          >about</nuxt-link
        >
        <nuxt-link
          to="/contact"
          active-class="border-hijau"
          class="hidden pt-2 font-medium text-black transition duration-300 ease-in-out border-b-2 border-transparent sm:block hover:text-gray-600 focus:border-hijau focus:outline-none hover:border-hijau"
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
        >
          <svg
            class="w-4 h-4 fill-current hover:text-hijau"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            />
          </svg>
        </a>
        <a
          :href="twitter_url"
          target="_blank"
          rel="noreferrer noopener"
          class="hidden focus:outline-none sm:block"
        >
          <svg
            class="w-4 h-4 ml-2 fill-current hover:text-hijau"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
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
        class="flex flex-col items-center min-h-screen px-3 pt-3 space-y-3 text-center focus:outline-none origintop"
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
      twitter_url: process.env.SOCIAL_TWITTER_URL,
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
