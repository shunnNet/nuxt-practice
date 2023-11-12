<script setup lang="ts">
import { useField } from 'vee-validate';
import * as yup from 'yup'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
})
const { value, errorMessage } = useField(
  () => props.name,
  yup.string().required()
)
</script>
<template>
  <div>
    <input v-model="value" class="p-2 border rounded-sm w-full" v-bind="$attrs" />
    {{ errorMessage }}
  </div>
</template>
<style></style>