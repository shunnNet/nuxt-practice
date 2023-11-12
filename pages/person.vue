<script setup lang="ts">
const { data, pending, error } = await useLazyAsyncData(
  'LazyAsync',
  async () => {
    try {
      throw new Error('Failed')
      await sleep(2000)
      console.log('wake up')
      return { status: 'OK', name: 'Net' }
    } catch (e) {
      console.log('Error occured')
      // showError({ statusCode: 404, statusMessage: 'API Failed' })
      throw createError({ statusCode: 404, statusMessage: 'API Failed', fatal: true })
    }
  },
  {
    pick: ['name'],
    transform(input) {
      return {
        name: 'Net Chen',
      }
    },
  }
)
console.log(error.value)
if (error.value) {
  console.log('ERROR')
  throw createError({ statusCode: 500, statusMessage: 'abc', fatal: true })
}
// throw error.value

const req = async () => {
  const d = await useData()
  console.log('resolve', d)
}
// onMounted(async () => {
// })
</script>
<template>
  <div>
    <h1>Person</h1>
    <div v-if="pending">Loading...</div>
    <div v-else>data: {{ data }}</div>
    <div>
      <button @click="req">Request</button>
    </div>
  </div>
</template>
<style></style>
