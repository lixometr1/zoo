export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zoo',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/vue-range-slider",
    },
    {
      src: "@/plugins/vue-select",
    },
    {
      src: "@/plugins/vue-awesome-swiper",
      mode: "client"
    },
    {
      src: "@/plugins/vue-paginate",
      mode: "client"
    },
    {
      src: "@/plugins/vue-scrollbar",
    },
    {
      src: "@/plugins/vue-click-outside",
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.js',
    jit: true,
    exposeConfig: true,
    config: {},
  },

  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    "@nuxtjs/svg",
    'cookie-universal-nuxt'
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    locales: [
      {
        code: 'ru',
        file: 'ru.ts'
      },
      {
        code: 'ua',
        file: 'ua.ts'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ru',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // server: { host: '0.0.0.0', },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': true,
      }
    }
  },
}
