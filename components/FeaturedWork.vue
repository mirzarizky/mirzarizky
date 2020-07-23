<template>
  <div class="flex flex-col items-stretch space-y-32 font-serif">
    <div
      v-for="work in works"
      :key="work.slug"
      class="self-start flex-1 w-full border-red-800 md:w-3/5 odd:self-end group"
    >
      <nuxt-link :to="'work/' + work.slug" class="focus:outline-none">
        <img :src="work.image.thumbnail" class="py-2" :alt="work.title" />
      </nuxt-link>
      <div class="font-sans lowercase">{{ work.client }}</div>
      <div class="text-2xl font-semibold border-b-2 border-transparent">
        {{ work.title }}
      </div>
      <nuxt-link
        :to="'work/' + work.slug"
        class="font-sans transition duration-300 ease-in-out border-b-2 border-transparent group-hover:border-hijau"
        >view case
        <span class="inline-flex">
          <svg
            viewBox="0 0 16 16"
            class="w-3 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"
            />
            <path
              fill-rule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"
            />
          </svg>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped></style>
