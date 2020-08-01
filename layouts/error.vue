<template>
  <div class="flex flex-col max-w-screen-xl min-h-screen mx-auto">
    <div
      v-if="error.statusCode === 404"
      class="flex flex-col items-center max-w-screen-sm px-4 pt-10 mx-auto text-center text-black"
    >
      <img
        v-lazy="'https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif'"
        alt="Confused Travolta from giphy"
        class="w-full bg-opacity-25 bg-hijau"
      />
      <div class="text-5xl font-light">404</div>
      <div class="text-lg">
        There's nothing here. Go
        <nuxt-link
          to="/"
          class="transition duration-300 ease-in-out border-b border-black hover:border-b-2 hover:font-medium"
          >home</nuxt-link
        >.
      </div>
    </div>

    <div
      v-else
      class="flex flex-col items-center px-4 pt-10 text-center text-black"
    >
      <div class="text-5xl font-light">{{ error.statusCode }}</div>
      <div class="text-lg">An error occurred</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'nothing',
  head: {
    title: '404 Nothing here'
  }
}
</script>
