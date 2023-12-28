export default defineNuxtPlugin((nuxt) => {
  nuxt.provide("mixpanel", {
    track: (event: string) => {
      console.log("mixpanel event", event)
    },
  })
  nuxt.hook("app:rendered", () => {
    console.log("app:rendered")
  })
})
