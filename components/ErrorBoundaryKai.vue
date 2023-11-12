<script setup lang="ts">
import { consola } from 'consola'
const emit = defineEmits(['error'])

const capturedError = ref()

onErrorCaptured((err) => {
  consola.log('Boundary Captured!')
  emit('error', err)
  capturedError.value = err
  // add tracking logic
  return false
})
</script>
<template>
  <NuxtErrorBoundary @error="$emit('error', $event)">
    <template #error="scoped">
      <slot v-bind="scoped" name="error" />
    </template>
    <template #default>
      <template v-if="!capturedError">
        <slot />
      </template>
      <template v-else><slot name="error" :error="capturedError" /></template>
    </template>
  </NuxtErrorBoundary>
</template>
