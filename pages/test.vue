<script setup lang="ts">
import { getTodo } from '~/utils/api'

const data = await useAsyncData('todo', () =>
  getTodo().then((res) => {
    return res
  })
)
onMounted(() => {
  console.log(data)
})
</script>
<template>
  <div>123</div>
</template>
<style></style>
