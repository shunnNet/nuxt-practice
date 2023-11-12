import { defineNuxtPlugin } from "#app"
import consola from "consola"

export default defineNuxtPlugin(async ({ nuxtApp }) => {
  consola.info(import.meta.dev)
  if (import.meta.dev && import.meta.client) {
    const { worker } = await import("./browserMock")
    worker.start({
      onUnhandledRequest: "bypass",
    })
    consola.success("Worker start successfully")
  }
})
