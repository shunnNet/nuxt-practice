// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ],
  // build: {
  //   transpile: ["@vuepic/vue-datepicker"],
  // },
  build: {
    transpile: ["vuejs3-datepicker"],
  },
})
