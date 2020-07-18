<template>
  <div class="flex flex-col max-w-screen-xl min-h-screen mx-auto font-sans">
    <div class="flex-grow">
      <navbar />
      <nuxt />
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
  },
  head() {
    return {
      bodyAttrs: {
        class: 'bg-grey-100 text-black antialiased'
      }
    }
  }
}
</script>
