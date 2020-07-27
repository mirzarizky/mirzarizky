<template>
  <div class="pt-10 xl:pt-20">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-10 xl:px-24">
      <div
        class="flex flex-col justify-between space-x-0 md:space-x-16 md:flex-row"
      >
        <div class="w-full md:w-3/5">
          <div class="prose-sm prose sm:prose lg:prose-lg xl:prose-xl">
            <nuxt-content :document="about" />
          </div>
        </div>
        <div class="order-first w-full md:order-last md:w-2/5">
          <img
            class="self-auto flex-1 w-full max-w-lg mx-auto my-6 bg-opacity-25 md:ml-auto bg-hijau md:self-end min-w-screen"
            :src="cloudinary_url(about.image, 'fl_progressive')"
            alt="Mirza Rizky"
          />
        </div>
      </div>

      <!-- experiences -->
      <div class="my-10 xl:my-24">
        <div class="mb-2 text-sm text-gray-700 sm:text-base md:text-lg md:mb-5">
          experiences —
        </div>
        <div class="flex flex-col space-y-5 md:space-y-10">
          <template v-for="experience in experiences">
            <div :key="experience.company.name">
              <div
                class="font-serif text-lg font-semibold tracking-wide lg:text-3xl sm:text-xl md:text-2xl"
              >
                {{ experience.position }} @
                <a
                  :href="experience.company.url"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="border-b-2 border-transparent text-hijau focus:outline-none hover:border-hijau"
                  >{{ experience.company.name }}
                </a>
              </div>
              <div
                class="text-sm text-gray-700 lowercase sm:text-base md:text-lg"
              >
                {{ formattedDate(experience.start) }} -
                {{
                  experience.present
                    ? 'Presenet'
                    : formattedDate(experience.end)
                }}
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- skills -->
      <div class="my-10 xl:my-24">
        <div class="mb-2 text-sm text-gray-700 sm:text-base md:text-lg md:mb-5">
          skills —
        </div>
        <div class="grid grid-cols-1 row-gap-5 col-gap-10 md:grid-cols-3">
          <template v-for="skillName in skillSet">
            <div :key="skillName">
              <div
                class="font-serif text-lg font-semibold tracking-wide capitalize lg:text-3xl sm:text-xl md:text-2xl"
              >
                {{ skillName }} <span class="font-normal">—</span>
              </div>
              <ul>
                <li
                  v-for="skill in skills[skillName]"
                  :key="skill"
                  class="text-sm sm:text-base md:text-lg"
                >
                  {{ skill }}
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cloudinary from '@/mixins/cloudinary'

export default {
  mixins: [cloudinary],
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const experiences = await $content('experience')
      .where({ show: true })
      .sortBy('start', 'desc')
      .fetch()
    const skills = await $content('skills').fetch()

    return {
      about,
      experiences,
      skills
    }
  },
  data() {
    return {
      skillSet: ['technical', 'software']
    }
  },
  methods: {
    formattedDate(date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: 'About — Mirza Rizky',
      head: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'About — Mirza Rizky'
        },
        {
          hid: 'url',
          property: 'url',
          content: `${process.env.BASE_URL}/about`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/about`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Abou — Mirza Rizky'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${process.env.BASE_URL}/about`
        }
      ]
    }
  }
}
</script>
