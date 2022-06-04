<template>
  <div
    class="py-6 border-t border-black dark:border-white sm:py-8 sm:border-t-2"
  >
    <div class="container">
      <div
        class="flex flex-col items-center justify-between space-y-1 sm:flex-row sm:space-y-0"
      >
        <NuxtLink
          to="/contact"
          class="flex items-center space-x-4 focus:outline-none"
        >
          <div
            class="text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            say hello
          </div>
          <div class="hidden sm:block">
            <svg
              viewBox="0 0 16 16"
              class="fill-current sm:w-10 md:w-12"
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
        </NuxtLink>
        <div
          class="flex items-center space-x-1 text-sm font-medium tracking-normal sm:tracking-tight sm:text-base md:text-lg"
        >
          <a
            rel="noreferrer noopener"
            :href="`tel:${contact.telp.split(' ').join('')}`"
            class="transition duration-300 ease-in-out focus:outline-none focus:text-hijau hover:text-hijau"
          >
            {{ contact.telp }}
          </a>
          <div>/</div>
          <a
            rel="noreferrer noopener"
            :href="`mailto:${contact.mail}`"
            class="transition duration-300 ease-in-out focus:outline-none focus:text-hijau hover:text-hijau"
          >
            {{ contact.mail }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

const { contact } = config.public
</script>
