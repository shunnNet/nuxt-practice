<script setup lang="ts">
// const { data } = await useFetch('https://jsonplaceholder.typicode.com/todos/1')

// const err = createError({
//   statusCode: 400,
//   statusMessage: 'Error MEssage',
// })
// showError({
//   statusCode: 400,
//   statusMessage: 'Error MEssage',
//   // message: 'Hello Error',
// })
const triggerError = () => {
  throw new Error()
}
onMounted(() => {
  // try {
  // } catch (e) {
  //   consola.success('error handled!')
  // }
})

const value = computed(() => {
  throw new Error()
})
</script>
<template>
  <div>
    {{ value }}
    <button @click="triggerError">triggerError</button>
  </div>
</template>
<style></style>
