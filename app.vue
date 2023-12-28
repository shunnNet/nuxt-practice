<script lang="ts">
import "@unocss/reset/tailwind-compat.css"
play(undefined, "hello")
</script>

<template>
  <div class="text-red-500">{{ route.meta.title }}</div>
  <h1 class="main-title xl:(p-20px mb-20px)">text</h1>
  <NuxtLayout>
    <div>
      <!-- here -->
      <GlobalLoading />
      <!-- <NuxtLoadingIndicator>
      </NuxtLoadingIndicator> -->
      <!-- <LoadingCube></LoadingCube> -->
      <NuxtPage class="" />
    </div>
    <div>
      <!-- <div class="hover:(text-(sm red shadow))">Here</div> -->
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const value = ref({
  name: "net",
})

const route = useRoute()

onMounted(() => {
  console.log(value)
})
</script>

<style lang="scss">
@use "~/assets/scss/index.scss";
// @import "primevue/resources/themes/lara-light-green/theme.css";
</style>

<style lang="css">
.main-title {
  color: theme("colors.brand.primary");
}
body {
  color: theme("colors.brand.black");
}
</style>
