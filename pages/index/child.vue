<script setup lang="ts">
import { onMounted } from "vue"

definePageMeta({
  title: "Child",
})
const route = useRoute()
onMounted(() => {
  console.log(route.meta)
})
</script>
<template>
  <div class="text-red-500">Child</div>
</template>
<style></style>
