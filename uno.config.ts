import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import config from '@una-ui/nuxt/una.config'
export default defineConfig({
    ...config,
    theme: {
        fontFamily: {
            display: 'Clash Display',
            mono: 'Lexa',
            compact: 'WS Lowen',
            body: 'Outfit'
        },

    },
    safelist: ["fill-purple-500", "stroke-purple-500", "stroke-purple-300", "fill-purple-300", "fill-amber-500", "stroke-amber-500", "stroke-amber-300", "fill-amber-300"],
    presets: [
        presetUno(),
    ],
    transformers: [
        transformerDirectives(),
    ],
})