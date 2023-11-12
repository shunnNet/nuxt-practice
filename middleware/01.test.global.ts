export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof to.query.redirect === "string") {
    console.log(`redirect to: ${to.query.redirect}`)
    return navigateTo(to.query.redirect)
  }
})
