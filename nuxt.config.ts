// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-headlessui',
    'nuxt-vitest',
    '@nuxt/devtools',
    '@nuxt/content'
  ],
  experimental: {
    reactivityTransform: true
  },
  css: ['@/assets/scss/global.scss', '~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    classSuffix: ''
  },
  headlessui: {
    prefix: ''
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *; @use "@/assets/scss/_media.scss" as *;'
        }
      }
    }
  },
  devtools: true,
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  plugins: ['~/plugins/vue-gtag.js']
})
