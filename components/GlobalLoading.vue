<script setup lang="ts">
import { globalMiddleware } from "#build/middleware"
import type { RouteLocationNormalized } from "vue-router"

const show = ref(false)
const finish = () => (show.value = false)
const start = () => (show.value = true)
if (import.meta.client) {
  const nuxtApp = useNuxtApp()
  const router = useRouter()

  globalMiddleware.unshift(start)
  router.onError(() => finish())
  router.beforeResolve((to, from) => {
    if (!isChangingPage(to, from)) {
      finish()
    }
  })

  router.afterEach((_to, _from, failure) => {
    console.log("afterEach")
    finish()
    // if (failure) {
    // }
  })

  // nuxtApp.hook("")

  const unsubPage = nuxtApp.hook("page:finish", () => {
    console.log("page:finish")
    finish()
  })
  const unsubError = nuxtApp.hook("vue:error", () => {
    finish()
  })

  onBeforeUnmount(() => {
    const index = globalMiddleware.indexOf(start)
    if (index >= 0) {
      globalMiddleware.splice(index, 1)
    }
    unsubPage()
    unsubError()
    finish()
  })
}

function generateRouteKey(route: RouteLocationNormalized) {
  const source =
    route?.meta.key ??
    route.path
      .replace(/(:\w+)\([^)]+\)/g, "$1")
      .replace(/(:\w+)[?+*]/g, "$1")
      .replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "")
  return typeof source === "function" ? source(route) : source
}

function isChangingPage(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
) {
  if (to === from) {
    return false
  }

  // If route keys are different then it will result in a rerender
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true
  }

  const areComponentsSame = to.matched.every(
    (comp, index) =>
      comp.components &&
      comp.components.default === from.matched[index]?.components?.default,
  )
  if (areComponentsSame) {
    return false
  }
  return true
}

// const loading = ref(false)
</script>

<template>
  <FadeTransition>
    <div class="loading" v-if="show">
      <LoadingCube />
    </div>
  </FadeTransition>
</template>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
</style>
