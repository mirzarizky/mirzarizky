<template>
  <div class="pt-10 xl:pt-20">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <nuxt-link
          v-for="work in works"
          :key="work.slug"
          :to="'work/' + work.slug"
          class="w-full h-64 bg-center bg-cover focus:outline-none"
          :style="{ backgroundImage: `url('${work.image.square}')` }"
        >
          <div
            class="flex flex-col items-center justify-center w-full h-full text-center lowercase transition duration-300 ease-in-out bg-opacity-0 bg-hijau hover:bg-opacity-75 group"
          >
            <div
              class="text-3xl font-semibold tracking-wide transition-all duration-300 ease-in-out delay-75 origin-top scale-y-150 opacity-0 group-hover:scale-y-1 group-hover:opacity-100"
            >
              {{ work.title }}
            </div>
            <div
              class="transition duration-300 ease-in-out delay-75 opacity-0 group-hover:opacity-100"
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
export default {
  async asyncData({ $content, params }) {
    const works = await $content('work').fetch()

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
