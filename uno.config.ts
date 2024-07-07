import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import config from '@una-ui/nuxt/una.config'
export default defineConfig({
    ...config,
    presets: [
        presetUno(),
    ],
    transformers: [
        transformerDirectives(),
    ],
})