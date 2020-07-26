require('dotenv').config()

const APP_TITLE = 'Mirza Rizky — Web Developer'
export default {
  env: {
    BASE_URL: process.env.BASE_URL,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CONTACT_TELP: process.env.CONTACT_TELP,
    CONTACT_MAIL: process.env.CONTACT_MAIL,
    SOCIAL_LINKEDIN_URL: process.env.SOCIAL_LINKEDIN_URL,
    SOCIAL_TWITTER_URL: process.env.SOCIAL_TWITTER_URL,
    SOCIAL_INSTAGRAM_URL: process.env.SOCIAL_INSTAGRAM_URL,
    SOCIAL_GITHUB_URL: process.env.SOCIAL_GITHUB_URL
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: APP_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'url', name: 'url', content: process.env.BASE_URL },
      { hid: 'og:title', property: 'og:title', content: APP_TITLE },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description
      },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/social_meta.png`
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'mirzarizky.me'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@mirzarm' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@mirzarm' },
      { hid: 'twitter:title', name: 'twitter:title', content: APP_TITLE },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${process.env.BASE_URL}/social_meta.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: process.env.BASE_URL
      }
    ],
    bodyAttrs: {
      class: 'bg-gray-100 text-black antialiased'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#88b04b', height: '5px' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/hamburgers.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-typed.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxt/content'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  webfontloader: {
    google: {
      families: ['Work+Sans:400,500,600,700,800', 'Lora:400,500,600,700']
    }
  }
}
