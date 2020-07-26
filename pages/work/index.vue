<template>
  <div class="pt-10 xl:pt-20">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <nuxt-link
          v-for="work in works"
          :key="work.slug"
          :to="'work/' + work.slug"
          class="w-full h-64 bg-opacity-25 bg-center bg-cover bg-hijau focus:outline-none"
          :style="{
            backgroundImage: `url('${cloudinary_url(
              work.image.square,
              'fl_progressive'
            )}')`
          }"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full text-center lowercase transition duration-300 ease-in-out bg-opacity-0 bg-hijau hover:bg-opacity-75 group"
          >
            <div
              class="text-3xl font-semibold tracking-wide transition-all duration-500 ease-in-out delay-75 origin-top transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {{ work.title }}
            </div>
            <div
              class="transition-all duration-300 ease-in-out delay-150 origin-bottom transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {{ work.client }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import cloudinary from '@/mixins/cloudinary'

export default {
  mixins: [cloudinary],
  async asyncData({ $content, params }) {
    const works = await $content('work')
      .sortBy('year', 'desc')
      .fetch()

    return { works }
  },
  head() {
    return {
      title: 'Work — Mirza Rizky'
    }
  }
}
</script>

<style lang="scss" scoped></style>
