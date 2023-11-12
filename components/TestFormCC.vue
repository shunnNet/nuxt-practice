<script setup lang="ts">
import * as yup from "yup"

const nameRule = yup.string().required()
const emailRule = yup.string().email().required()


</script>
<template>
  <label class="flex flex-col">
    <Field name="name" :rules="nameRule" />
    <ErrorMessage name="name" class="error-msg" />
  </label>
  <label class="flex flex-col">
    <Field name="email" :rules="emailRule" />
    <ErrorMessage name="email" class="error-msg" />
  </label>
</template>
<style></style>