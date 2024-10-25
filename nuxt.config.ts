// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  ssr: true,

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Nelson Rodríguez - Desarrollador y Programador web',
      meta: [
        {
          name: 'description',
          content:
            'Portafolio de Nelson Rodriguez desarrollador y programador web',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
        {
          charset: 'utf-8',
        },
        {
          name: 'keywords',
          content:
            'Nelson Rodriguez, Nelson Rodríguez, nelson rodriguez, Nelsonrrj, nelsonrrj, Portafolio, portafolio de nelson rodriguez',
        },
      ],
    },
  },

  modules: ['@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
