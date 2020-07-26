<template>
  <div class="flex flex-col max-w-screen-xl min-h-screen mx-auto font-sans">
    <div class="flex-grow">
      <navbar />
      <nuxt />

      <div class="flex justify-center my-10 sm:my-16 md:my-24">
        <nuxt-link
          to="/contact"
          class="text-3xl font-medium text-center sm:text-4xl md:text-5xl lg:text-6xl focus:outline-none focus:underline hover:underline"
        >
          you like what you see? <br />
          let's work together
        </nuxt-link>
      </div>
    </div>

    <app-footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    AppFooter: Footer
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
