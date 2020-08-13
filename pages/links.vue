<template>
  <div class="flex flex-col max-w-screen-xl min-h-screen pt-10">
    <div class="flex-grow">
      <div class="flex flex-col items-center py-5">
        <img
          v-lazy="cloudinary_url('avatar.jpg', 'fl_progressive')"
          :src="'loading.svg'"
          class="w-24 h-24 bg-opacity-25 rounded-full bg-hijau"
          alt="@mirzarizky's avatar"
        />
        <p
          class="mt-4 text-base font-semibold tracking-wide text-center text-gray-800"
        >
          @mirzarizky
        </p>
      </div>
      <div class="flex flex-col max-w-2xl px-2 mx-auto space-y-6 min-w-screen">
        <template v-for="link in links">
          <a
            v-if="link.show"
            :key="link.title"
            :href="link.url"
            class="w-full py-3 tracking-wide text-center text-gray-200 transition duration-500 ease-in-out bg-gray-700 border-2 border-transparent rounded-sm hover:text-gray-700 hover:border-gray-700 hover:bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
            >{{ link.title }}</a
          >
        </template>
      </div>
    </div>
    <div
      class="py-4 text-sm font-medium tracking-normal text-center text-gray-700"
    >
      Made with ❤️ in Bogor, Indonesia.
    </div>
  </div>
</template>

<script>
import cloudinary from '@/mixins/cloudinary'

export default {
  layout: 'nothing',
  mixins: [cloudinary],
  async asyncData({ $content }) {
    const links = await $content('links')
      .where({ show: true })
      .sortBy('order')
      .fetch()

    return { links }
  },
  head() {
    return {
      title: 'Links — Mirza Rizky'
    }
  }
}
</script>

<style>
img[lazy='loading'] {
  @apply animate-pulse;
}
</style>
