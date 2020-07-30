<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="px-4 pt-10 sm:px-10 xl:px-24">
      <img
        v-lazy="cloudinary_url(work.image.thumbnail, 'fl_progressive')"
        class="w-full bg-opacity-25 bg-hijau"
        :alt="work.title"
      />
      <h1
        class="my-5 font-serif text-3xl font-bold text-center md:text-4xl lg:text-5xl"
      >
        {{ work.title }}
      </h1>
      <div class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-xl">
        <nuxt-content :document="work" />
      </div>
      <div class="mt-10 mb-5 space-y-4 text-lg sm:text-xl md:text-2xl">
        <div class="flex items-center pb-2 border-b border-black">
          <div class="w-2/6 text-gray-700">
            client
          </div>
          <div class="w-2/3 sm:w-4/6">
            {{ work.client }}
          </div>
        </div>
        <div class="flex items-center pb-2 border-b border-black">
          <div class="w-2/6 text-gray-700">
            year
          </div>
          <div class="w-4/6">
            {{ work.year }}
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-5 mb-5">
        <nuxt-link
          v-if="work.prev"
          :to="work.prev"
          class="flex items-center space-x-2 text-lg border-b-2 border-transparent focus:outline-none hover:border-hijau"
          no-prefetch
        >
          <svg class="w-3 fill-current md:w-4" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div class="text-sm sm:text-base md:text-lg">
            previous work
          </div>
        </nuxt-link>
        <span v-else>&nbsp;</span>
        <nuxt-link
          v-if="work.next"
          :to="work.next"
          class="flex items-center space-x-2 text-lg border-b-2 border-transparent focus:outline-none hover:border-hijau"
          no-prefetch
        >
          <div class="text-sm sm:text-base md:text-lg">
            next work
          </div>
          <svg class="w-3 fill-current md:w-4" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>

        <span v-else>&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import cloudinary from '@/mixins/cloudinary'

export default {
  scrollToTop: true,
  mixins: [cloudinary],
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()
    return { work }
  },
  data() {
    return {
      work: {}
    }
  },
  head() {
    return {
      title: `${this.work.title} — Mirza Rizky's Portfolio`,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.work.title} — Mirza Rizky's Portfolio`
        },
        {
          hid: 'url',
          property: 'url',
          content: `${process.env.BASE_URL}/work/${this.work.slug}`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/work/${this.work.slug}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.cloudinary_url(
            this.work.image.thumbnail,
            'c_fill,q_auto:low,g_auto,w_1200,h_600,fl_progressive'
          )
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: `${this.work.title} — Mirza Rizky's Portfolio`
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.cloudinary_url(
            this.work.image.thumbnail,
            'c_fill,q_auto:low,g_auto,w_1200,h_600,fl_progressive'
          )
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.work.title} — Mirza Rizky's Portfolio`
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${process.env.BASE_URL}/work/${this.work.slug}`
        }
      ]
    }
  }
}
</script>
