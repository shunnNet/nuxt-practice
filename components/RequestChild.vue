<script setup lang="ts">
const { data } = await useAsyncData('Message', () => getTodo())

const { data: nuxtData } = useNuxtData('Message')
const refresh = async () => {
  console.log('refreshing')
  await refreshNuxtData(['Message'])
}
const clear = async () => {
  console.log('clear')
  clearNuxtData()
}
</script>
<template>
  <div>Hello World</div>
  <div>
    {{ data }}
  </div>
  <div>
    <button class="ring p-2 rounded-sm bg-cyan-400" @click="refresh">refresh</button>
    <button class="ring p-2 rounded-sm bg-red-400" @click="clear">clear</button>
    123
  </div>
</template>
