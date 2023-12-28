import { Data } from "~/utils/class"

// https://github.com/nuxt/nuxt/discussions/20879
/**
 * This kind of plugin runs very early in the Nuxt lifecycle, before we revive the payload.
 * You will not have access to the router or other Nuxt-injected properties.
 */
export default definePayloadPlugin((nuxtApp) => {
  definePayloadReducer("class_data", (data) => {
    if (data instanceof Data) {
      return { name: data.name }
    }
  })

  definePayloadReviver("class_data", (data) => {
    return new Data(data.name)
  })
})
