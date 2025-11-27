// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-phosphor-icons',
    'nuxt-auth-utils',
  ],
  devtools: { enabled: true },
  css: ['~/assets/styles/global.scss'],
  runtimeConfig: {
    authPassword: process.env.NUXT_AUTH_PASSWORD,
    public: {
      PIX_KEY: process.env.NUXT_PIX_KEY,
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: 'single',
      },
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600],
      styles: ['normal'],
    },
  },
})
