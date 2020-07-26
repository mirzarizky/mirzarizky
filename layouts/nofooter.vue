<template>
  <div class="flex flex-col max-w-screen-xl min-h-screen mx-auto font-sans">
    <div class="flex-grow">
      <navbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
