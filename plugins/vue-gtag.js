// plugins/vue-gtag.js
import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: 'G-M9YSNPHB2S' }
  })
})
