<template>
  <div class="flex items-center justify-between py-8 border-t-2 border-black">
    <nuxt-link
      to="/contact"
      class="flex items-center space-x-4 focus:outline-none"
    >
      <div class="text-5xl font-semibold tracking-wide">
        say hello
      </div>
      <div>
        <svg class="w-12 text-black fill-current" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </nuxt-link>

    <div class="flex items-center space-x-1 text-lg font-medium">
      <a
        :href="'tel:' + contact.telp"
        class="text-black transition duration-300 ease-in-out hover:text-hijau"
        >{{ contact.telp }}</a
      >
      <div>/</div>
      <a
        :href="'mailto:' + contact.mail"
        class="text-black transition duration-300 ease-in-out hover:text-hijau"
        >{{ contact.mail }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        telp: process.env.CONTACT_TELP,
        mail: process.env.CONTACT_MAIL
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
