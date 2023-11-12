<script setup>
const { data } = useAsyncData('getPets', async () => {
  return await getMessage()
})
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
    <!-- <AsComponent></AsComponent> -->
    <!-- <div v-if="pending">Loading...</div>
    <div v-else-if="data">{{ data }}</div>
    {{ error }} -->
    <span class="m-100  md:text-red-500">123</span>
    <span class="m-10">123</span>
    <button>123</button>
  </div>
</template>
