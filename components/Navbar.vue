<template>
  <div class="flex items-center justify-between px-3 pt-6 xl:px-0">
    <div class="flex items-center space-x-8">
      <logo class="mr-3" />
      <nuxt-link
        to="/work"
        active-class="border-hijau"
        class="pt-2 font-medium transition duration-300 ease-in-out border-b-2 border-transparent focus:outline-none hover:border-hijau"
        >work</nuxt-link
      >
      <nuxt-link
        to="/about"
        active-class="border-hijau"
        class="pt-2 font-medium transition duration-300 ease-in-out border-b-2 border-transparent focus:outline-none hover:border-hijau"
        >about</nuxt-link
      >
      <nuxt-link
        to="/contact"
        active-class="border-hijau"
        class="pt-2 font-medium transition duration-300 ease-in-out border-b-2 border-transparent focus:outline-none hover:border-hijau"
        >contact</nuxt-link
      >
    </div>

    <div>icon</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>
