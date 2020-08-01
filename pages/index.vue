<template>
  <div class="pt-10 xl:pt-20">
    <div
      class="w-full px-4 text-left lg:w-3/4 sm:px-10 xl:px-24 md:text-center lg:text-left"
    >
      <div
        class="mb-2 font-serif text-4xl font-extrabold sm:text-5xl md:text-5xl lg:text-6xl"
      >
        <vue-typed-js
          :type-speed="100"
          :back-delay="2000"
          :back-speed="30"
          :strings="iam"
          :start-delay="2500"
          class="inline-flex"
        >
          <h1>
            👋🏻 Hi, I'm Mirza;
            <span class="typing">a web developer.</span>
          </h1>
        </vue-typed-js>
      </div>
      <div class="text-base font-medium sm:text-lg md:text-xl">
        Currently located in Bogor, Indonesia. I make web applications, usually
        with Laravel and Vue. I'm currently open for freelance or project-based
        work. You can contact me at
        <a
          :href="'mailto:' + mail"
          class="pb-1 transition duration-300 ease-in-out border-b hover:text-hijau border-hijau focus:outline-none focus:border-b-2 focus:text-hijau hover:border-b-2"
          >{{ mail }}</a
        >.
      </div>
    </div>

    <div
      class="px-4 my-10 text-left md:text-center lg:text-left xl:my-24 sm:px-10 xl:px-24"
    >
      <a
        href="#featured-work"
        class="text-base font-medium leading-none transition duration-150 ease-in-out focus:outline-none focus:text-hijau hover:text-hijau sm:text-lg md:text-xl"
      >
        featured work
        <svg class="inline-flex w-3 fill-current sm:w-4" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>

    <div id="featured-work" class="px-4 pt-4 mt-20 mb-10 xl:px-24">
      <featured-work :works="featuredWorks" />
    </div>
  </div>
</template>

<script>
import FeaturedWork from '~/components/FeaturedWork'

export default {
  components: {
    FeaturedWork
  },
  async asyncData({ $content }) {
    const featuredWorks = await $content('work')
      .only(['title', 'slug', 'client', 'image'])
      .where({ featured: true })
      .fetch()

    return { featuredWorks }
  },
  data() {
    return {
      iam: [
        'an indonesian.',
        'a coffee lover.',
        'an iron man.',
        'a web developer.'
      ],
      mail: process.env.CONTACT_MAIL
    }
  }
}
</script>
