import TypedRouter from 'nuxt-typed-router'
import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    TypedRouter,
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      contact: {
        telp: process.env.NUXT_PUBLIC_CONTACT_TELP,
        mail: process.env.NUXT_PUBLIC_CONTACT_MAIL,
        linkedin: process.env.NUXT_PUBLIC_SOCIAL_LINKEDIN_URL,
        twitter: process.env.NUXT_PUBLIC_SOCIAL_TWITTER_URL,
        github: process.env.NUXT_PUBLIC_SOCIAL_GITHUB_URL,
        instagram: process.env.NUXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
      },
    },
  },
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
  nuxtTypedRouter: {
    outDir: './generated',
  },
})
