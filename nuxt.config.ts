import tailwindcss from '@tailwindcss/vite'


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt', '@nuxt/image', 'nuxt-aos', 'nuxt-keen-slider'],
   css: ['~/assets/css/tailwind.css', ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
   shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./shadcn/ui"
     */
    componentDir: './shadcn/ui'
  },
})