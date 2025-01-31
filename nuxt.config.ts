import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      { families: { Inter: [300, 400, 500, 600, 700] }, download: true, overwriting: false, display: 'swap' },
    ],
    '@nuxtjs/color-mode',
  ],
  eslint: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [svgLoader()],
    vue: { script: { defineModel: true, propsDestructure: true } },
  },
})
