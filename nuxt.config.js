export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'xxACG - GalGame sharing community',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'theme-color', content: '#fff'},
      {name: 'http-equiv', content: 'IE=edge'},
      {hid: 'description', name: 'description', content: 'xxACG'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: 'https://bmss2-1253315888.file.myqcloud.com/static/libs/ionicons@5.2.3/dist/ionicons/ionicons.js'},
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    '@/assets/css/main.scss',
    '@/assets/css/nprogress.css',
    '@/assets/css/slider.css',
    '@/assets/css/grid.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax'
  ],

  // Extended router
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'home-page',
        path: '/',
        redirect: '/home'
      })
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/error/err404')
      })
    }
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
