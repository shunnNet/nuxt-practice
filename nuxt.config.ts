// https://nuxt.com/docs/api/configuration/nuxt-config

// radial-gradient(250px circle at var(--x) var(--y),var(--964c8fb2) 0,transparent 100%)
console.log(process.env.SENTRY_DSN)
export default defineNuxtConfig({
  runtimeConfig: {
    base: process.env.NUXT_BASE_URL22 || "http://localhost:3000",
    public: {
      mixpanelKey: "c0b0f0b0f0b0f0b0f0b0f0b0f0b0f0b0",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-Hant-TW",
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  routeRules: {
    "/admin/**": {
      ssr: false,
    },
    "/blog/**": {
      swr: 60,
    },
  },
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: [
    "@unocss/nuxt",
    "nuxt-primevue",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        rules: [],
        // Use different names for components
        // componentNames: {
        //   Form: "VeeForm",
        //   Field: "VeeField",
        //   FieldArray: "VeeFieldArray",
        //   ErrorMessage: "VeeErrorMessage",
        // },
      },
    ],
    "@nuxt/image",
  ],
  primevue: {
    components: {
      prefix: "Prime",
      include: ["Button", "InputText", "Calendar", "Dropdown", "Checkbox"],
    },
    // options: {
    //   unstyled: true,
    // },
  },
  image: {
    // Unknow Provider
    // jackercleaning: {
    //   baseURL: "https://storage.googleapis.com/jackercleaning/assets/optImg",
    // },
  },
  // build: {
  //   transpile: ["@vuepic/vue-datepicker"],
  // },
  build: {
    transpile: ["vuejs3-datepicker"],
  },
})
