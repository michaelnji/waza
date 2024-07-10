import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const Waza = definePreset(Aura, {
  semantic: {
    colorScheme: {
      primary: {
        50: '{purple.50}',
        100: '{purple.100}',
        200: '{purple.200}',
        300: '{purple.300}',
        400: '{purple.400}',
        500: '{purple.500}',
        600: '{purple.600}',
        700: '{purple.700}',
        800: '{purple.800}',
        900: '{purple.900}',
        950: '{purple.950}'
      },
      light: {
        surface: {
          0: '#ffffff',
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}'
        }
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{stone.50}',
          100: '{stone.100}',
          200: '{stone.200}',
          300: '{stone.300}',
          400: '{stone.400}',
          500: '{stone.500}',
          600: '{stone.600}',
          700: '{stone.700}',
          800: '{stone.800}',
          900: '{stone.900}',
          950: '{stone.950}'
        }
      }
    }
  }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    // '@hypernym/nuxt-anime',
    // '@nuxtjs/color-mode',
    // '@nuxtjs/device',
    // 'nuxt-headlessui',
    'shadcn-nuxt',
    // '@nuxtjs/i18n',
    // '@nuxt/image',
    // '@pinia/nuxt',
    // '@vueuse/nuxt',
    '@unocss/nuxt',
    '@una-ui/nuxt',
    "@nuxtjs/fontaine",
    '@primevue/nuxt-module',
    "@nuxt/icon",
    "@nuxtjs/tailwindcss"
  ],
  primevue: {
    options: {
      theme: {
        preset: Waza
      }
    }
  },
  fonts: {
    defaults: {
      weights: [200, 300, 400, 500, 600, 700, 800, 900],

    },

    provider: 'local'
  },
  shadcn: {

    prefix: '',

    componentDir: './components/ui'
  }
})