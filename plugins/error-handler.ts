import { consola } from 'consola'

export default defineNuxtPlugin((nuxtApp) => {
  // throw createError({
  //   statusCode: 404,
  //   statusMessage: 'Plugin',
  //   message: 'Test',
  // })
  nuxtApp.vueApp.config.errorHandler = (err, instance, info) => {
    consola.info('errorHandler', info)
  }
  nuxtApp.hook('vue:error', (err) => {
    consola.info('vue:error', err)
    // console.log("app:error", err);
  })
  nuxtApp.hook('app:error', (err) => {
    consola.info('app:error', err)
    // console.log("app:error", err);
  })
  nuxtApp.hook('app:mounted', (app) => {
    consola.info('app:mounted', app)
    // throw new Error('123')
    // console.log("app:error", err);
  })
})
