<script setup lang="ts">
const { data } = await useAsyncData('getTodo', async () => {
  return await getTodo()
})
</script>
<template>
  <div>Admin</div>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet tempore, perferendis ducimus ex maxime deserunt omnis
  nihil! Delectus cum nobis adipisci ullam sapiente voluptatum quo asperiores non dolore, maiores aut.
  {{ data }}
</template>
<style></style>