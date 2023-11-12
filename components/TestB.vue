<script setup lang="ts">
const color = useState<string>('color', () => ref('red'))
</script>
<template>
  <h2 class="text-2xl">TestA</h2>
  <h3 class="text-lg">Color: {{ color }}</h3>
</template>
<style></style>
