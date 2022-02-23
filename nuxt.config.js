const changeLoaderOptions = (loaders) => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === "sass-loader") {
        Object.assign(loader.options, {
          includePaths: ["./assets"],
        });
      }
    }
  }
};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Unofficial Nuxt + CoreUI project, free to use boilerplate for every need.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css",
      },
    ],

    script: [
      {
        href: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js",
        body: true,
      },
      {
        href: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js",
        body: true,
      },

      {
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
        body: true,
      },

      {
        href: " ../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        body: true,
      },
    ],
  },

  /*
   ** Set the link active classes
   */
  router: {
    linkActiveClass: "active open",
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#42A5CC" },

  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    "~/node_modules/flag-icon-css/css/flag-icon.min.css",
    /* Import Font Awesome Icons Set */
    "~/node_modules/font-awesome/css/font-awesome.min.css",
    /* Import Simple Line Icons Set */
    "~/node_modules/simple-line-icons/css/simple-line-icons.css",
    /* Import Bootstrap Vue Styles */
    "~/node_modules/bootstrap-vue/dist/bootstrap-vue.css",
    /* Import Core SCSS */
    { src: "~/assets/scss/style.scss", lang: "scss" },
    // "@sweetalert2/theme-dark"
    // { src: "~/assets/scss/main.scss", lang: "scss" },
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // {src: '~/plugins/vuelidate'}
  ],

  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
    "@nuxtjs/moment",
    "nuxt-element-ui",
  ],

  moment: {
    defaultLocale: "en",
    locales: ["ru", "tk"],
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/i18n",
      {
        strategy: "no_prefix",
        locales: [
          {
            code: "en",
            file: "en-US.js",
            name: "English",
          },
          {
            code: "ru",
            file: "ru-RU.js",
            name: "Russian",
          },
          {
            code: "tm",
            file: "tm-TM.js",
            name: "Turkmen",
          },
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "tm",
      },
    ],

    "nuxt-element-ui",
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
    "cookie-universal-nuxt",
    "@nuxtjs/proxy",
    ["@nuxtjs/proxy", { pathRewrite: { "^/api": "/api/v1" } }],
    "vue-sweetalert2/nuxt",
    "vue-sweetalert2/nuxt/no-css",
    "@nuxtjs/pwa",
  ],

  //end modules___________________

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  elementUI: {
    components: ["Button", "DatePicker"],
    locale: "fr",
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options,
    // baseURL: 'http://192.168.43.15:5000',
    baseURL: "http://192.168.43.61:5000/",
    // proxy: true,
    common: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  },

  proxy: {},
  /*
   ** Style resources configuration
   */
  styleResources: {
    scss: "./assets/scss/style.scss",
    sccs: "./assets/sccs/main.scss",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === "vue-loader"
        );
        const {
          options: { loaders },
        } = vueLoader || { options: {} };

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }

        config.module.rules.forEach((rule) => changeLoaderOptions(rule.use));
      }
    },
  },
};
