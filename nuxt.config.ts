// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL || '',
      },
    },
  },

  css: ['~/scss/global.scss'],
})
