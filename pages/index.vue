<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config.baseURL)

// const nuxtApp = useNuxtApp()
// console.log(nuxtApp.$router)
// const router = useRouter()
// console.log(router)

// console.log(nuxtApp.$mixpanel("test"))
// nuxtApp.$mixpanel.track("test")
// onMounted(() => {
//   nuxtApp.callHook("vue:error", new Error("123"), null, "info")
//   nuxtApp.callHook("page:transition:start")
// })

/* 
A -> B -> C -> D
A -> C -> D
*/

definePageMeta({
  title: () => {
    console.log(123)
  },
})
const route = useRoute()
watch(
  () => route.path,
  () => {
    console.log(route.meta)
  },
)
// onMounted(() => {
//   route.meta
// })
const { data } = useAsyncData(
  "getPets",
  async () => {
    return new Data("Net")
  },
  {
    transform: (data) => {
      return data
    },
  },
)
const appConfig = useAppConfig()
// console.log("🚀 ~ file: index.vue:29 ~ appConfig:", appConfig)
// console.log(
//   "🚀 ~ file: index.vue:30 ~ onMounted ~ config.baseURL:",
//   config.base,
// )
// onMounted(() => {
//   console.log(
//     "🚀 ~ file: index.vue:30 ~ onMounted ~ config.public.mixpanelKey",
//     config.public.mixpanelKey,
//   )
//   console.log(
//     "🚀 ~ file: index.vue:30 ~ onMounted ~ config.public.openaiApiKey",
//     config.public.openaiApiKey,
//   )
// })
// import { $fetch } from 'ofetch'
// import { useLazyAsyncData, createError } from '#imports'

// const fetchPost = () => $fetch('https://jsonplaceholder.typicode.com/posts/500000000000')

// const { data, pending, error } = await useLazyAsyncData('post', () => fetchPost())

// // console.log('error', error.value)
// if (error.value) {
//   throw createError({ statusCode: 404, statusMessage: '123' })
// }
</script>

<template>
  <div>
    {{ data }}
    {{ $config.public.mixpanelKey }}

    {{ appConfig.foo }}

    {{ $config.app.baseURL }}

    <button @click="appConfig.foo = 'BAR'">BAR</button>
    <div class="p-4">
      <NuxtLink :to="{ name: 'index-child' }">Go to Child</NuxtLink>
    </div>
    <NuxtPage></NuxtPage>
    <!-- {{ data }}
    <span class="m-100 md:text-red-500 square-40 block">123</span>
    <span class="m-10">123</span>
    <button>123</button>
    <NuxtImg
      class="w-300px block"
      width="699"
      height="466"
      src="https://images.unsplash.com/photo-1682686580224-cd46ea1a6950?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="一張漂亮的圖片"
    />
    <NuxtImg src="/miku_idol.jpg" width="960" height="540" />
    <NuxtImg
      format="webp"
      src="/miku_1180778.png"
      width="2048"
      height="1261"
      sizes="768px lg:2048px"
      :placeholder="[128, 73]"
      fit="fill"
    /> -->
    <!-- <NuxtImg
      provider="jackercleaning"
      src="/web/home/banner/top/banner-2023-grateful.jpg"
      width="3720"
      height="1050"
    /> -->
  </div>
</template>
