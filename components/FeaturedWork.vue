<template>
  <div class="flex flex-col items-stretch space-y-32 font-serif">
    <div
      v-for="work in works"
      :key="work.slug"
      class="self-start flex-1 w-full border-red-800 md:w-3/5 odd:self-end group"
    >
      <nuxt-link :to="'work/' + work.slug" class="focus:outline-none">
        <img
          :src="cloudinary_url(work.image.thumbnail, 'fl_progressive')"
          class="w-full my-2 bg-opacity-25 bg-hijau"
          :alt="work.title"
        />
      </nuxt-link>
      <div class="font-sans text-sm lowercase sm:text-base md:text-lg">
        {{ work.client }}
      </div>
      <div
        class="text-lg font-semibold border-b-2 border-transparent lg:text-3xl sm:text-xl md:text-2xl"
      >
        {{ work.title }}
      </div>
      <nuxt-link
        :to="'work/' + work.slug"
        class="font-sans text-sm transition duration-300 ease-in-out border-b-2 border-transparent sm:text-base md:text-lg group-hover:border-hijau"
        >view case
        <svg class="inline-flex w-3 fill-current sm:w-4" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="inline-flex"> </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import cloudinary from '@/mixins/cloudinary'
export default {
  mixins: [cloudinary],
  props: {
    works: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
