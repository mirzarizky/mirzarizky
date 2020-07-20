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
          <div>
            👋🏻 Hi, I'm Mirza; a
            <span class="typing">web developer.</span>
          </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      iam: ['indonesian.', 'coffee lover.', 'cat person.', 'web developer.'],
      mail: process.env.CONTACT_MAIL
    }
  }
}
</script>
