<script setup lang="ts">
const props = defineProps({
  error: Object,
})
console.log(props.error.statusCode)
onMounted(() => {
  console.log(useError().value)
})
const clear = () =>
  clearError({
    redirect: '/',
  })
</script>
<template>
  {{ error.statusCode }}
  {{ error.statusMessage }}
  {{ error.message }}
  {{ error }}
  <div class="mt-2">
    <NuxtLink to="/">Index</NuxtLink>
  </div>

  <div class="mt-2">
    <button @click="clear">Go back to home</button>
  </div>
</template>
<style></style>
