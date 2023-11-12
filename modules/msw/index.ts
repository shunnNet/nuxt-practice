import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit"
import { server } from "./setupServer"

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@nuxtjs/msw",
    configKey: "msw",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  hooks: {},
  setup(options, nuxt) {
    // nuxt.config
    // console.log(nuxt.options);
    nuxt.hook("ready", async (nuxt) => {
      console.log("Nuxt is ready")
      server.listen({
        onUnhandledRequest: "bypass",
      })
      // console.log(server.listHandlers())
      server.events.on("request:start", ({ request }) => {
        console.log("MSW intercepted:", request.method, request.url)
      })
    })
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // addPlugin(resolver.resolve("./plugins"))
  },
})
