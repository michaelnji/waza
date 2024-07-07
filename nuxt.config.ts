// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@hypernym/nuxt-anime',
    '@nuxtjs/color-mode',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/device',
    '@nuxt/fonts',
    'nuxt-headlessui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@una-ui/nuxt',
    "@nuxtjs/fontaine"
  ]
})