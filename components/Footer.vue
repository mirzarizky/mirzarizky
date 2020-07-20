<template>
  <div class="flex items-center justify-between py-8 border-t-2 border-black">
    <nuxt-link
      to="/contact"
      class="flex items-center space-x-4 focus:outline-none"
    >
      <div class="text-5xl font-medium leading-tight tracking-tight">
        say hello
      </div>
      <div>
        <svg
          viewBox="0 0 16 16"
          class="w-12 text-black fill-current"
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
      </div>
    </nuxt-link>

    <div class="flex items-center space-x-1 text-lg font-medium">
      <a
        :href="'tel:' + contact.telp"
        class="text-black transition duration-300 ease-in-out focus:outline-none focus:text-hijau hover:text-hijau"
        >{{ contact.telp }}</a
      >
      <div>/</div>
      <a
        :href="'mailto:' + contact.mail"
        class="text-black transition duration-300 ease-in-out focus:outline-none focus:text-hijau hover:text-hijau"
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
