<script setup lang="ts">
// const err = createError({
//   statusCode: 404,
//   statusMessage: 'Not Found',
//   fatal: true,
// })

// throw err
showError({
  statusCode: 404,
  statusMessage: 'Not Found: Show',
})
</script>
<template>
  <div>Err</div>
</template>
<style></style>
