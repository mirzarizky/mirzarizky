require('dotenv').config()

const APP_TITLE = 'Mirza Rizky — Web Developer'
const BASE_URL = process.env.BASE_URL

export default {
  target: 'static',
  env: {
    BASE_URL,
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
      { hid: 'url', name: 'url', content: BASE_URL },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: APP_TITLE
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description
      },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: BASE_URL },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/preview.png`
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
        content: `${BASE_URL}/preview.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: BASE_URL
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
  css: ['@/assets/css/main.css', '@/assets/css/hamburgers.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vue-typed.js',
    { src: '~/plugins/vue-lazyload.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/sentry'
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
  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('work')
        .only(['path'])
        .fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    }
  },
  sitemap: {
    hostname: BASE_URL
  },
  webfontloader: {
    google: {
      families: ['Work+Sans:400,500,600,700,800', 'Lora:400,500,600,700']
    }
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}
