<template>
  <div class="pt-10 xl:pt-20">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-10 xl:px-24">
      <h1
        class="mb-2 font-serif text-4xl font-extrabold sm:text-5xl md:text-5xl lg:text-6xl"
      >
        Say Hello
      </h1>
      <div class="text-base font-medium tracking-wide sm:text-lg md:text-xl">
        For any enquiries, or just to say hello, get in touch and contact me.
      </div>
      <div class="w-full my-10 xl:my-24 sm:w-3/4">
        <div class="grid grid-cols-1 row-gap-5 sm:row-gap-10 md:grid-cols-2">
          <div class="flex flex-col space-y-1">
            <div class="text-sm font-medium lowercase sm:text-base md:text-lg">
              Phone
            </div>
            <div>
              <a
                :href="`tel:${contact.telp}`"
                target="_blank"
                rel="noreferrer noopener"
                class="text-base font-medium tracking-wide transition duration-300 ease-in-out sm:text-lg md:text-xl focus:outline-none focus:text-hijau hover:text-hijau"
                >{{ contact.telp }}</a
              >
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="text-sm font-medium lowercase sm:text-base md:text-lg">
              Email
            </div>
            <div>
              <a
                :href="`mailto:${contact.mail}`"
                target="_blank"
                rel="noreferrer noopener"
                class="text-base font-medium tracking-wide transition duration-300 ease-in-out sm:text-lg md:text-xl focus:outline-none focus:text-hijau hover:text-hijau"
                >{{ contact.mail }}</a
              >
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="text-sm font-medium lowercase sm:text-base md:text-lg ">
              Social Media
            </div>
            <div class="flex items-center space-x-6">
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noreferrer noopener"
                class="transition duration-300 ease-in-out focus:outline-none hover:text-hijau"
                ><span class="sr-only">linkedin</span>
                <svg
                  class="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
              <a
                :href="contact.twitter"
                target="_blank"
                rel="noreferrer noopener"
                class="transition duration-300 ease-in-out focus:outline-none hover:text-hijau"
                ><span class="sr-only">twitter</span>
                <svg
                  class="h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                  />
                </svg>
              </a>
              <a
                :href="contact.github"
                target="_blank"
                class="transition duration-300 ease-in-out focus:outline-none hover:text-hijau"
                rel="noreferrer noopener"
                ><span class="sr-only">github</span>
                <svg
                  class="h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
                  />
                </svg>
              </a>
              <a
                :href="contact.instagram"
                target="_blank"
                rel="noreferrer noopener"
                class="transition duration-300 ease-in-out focus:outline-none hover:text-hijau"
                ><span class="sr-only">instagram</span>
                <svg
                  class="h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nofooter',
  data() {
    return {
      contact: {
        telp: process.env.CONTACT_TELP,
        mail: process.env.CONTACT_MAIL,
        github: process.env.SOCIAL_GITHUB_URL,
        instagram: process.env.SOCIAL_INSTAGRAM_URL,
        twitter: process.env.SOCIAL_TWITTER_URL,
        linkedin: process.env.SOCIAL_LINKEDIN_URL
      }
    }
  },
  head() {
    return {
      title: 'Contact — Mirza Rizky',
      head: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact — Mirza Rizky'
        },
        {
          hid: 'url',
          property: 'url',
          content: `${process.env.BASE_URL}/contact`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/contact`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact — Mirza Rizky'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `${process.env.BASE_URL}/contact`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
