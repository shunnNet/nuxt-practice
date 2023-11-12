<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate"

const validateEmail = (value: any) => {
  // if the field is empty
  if (!value) {
    return "This field is required"
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return "This field must be a valid email"
  }
  // All is good
  return true
}

const onSubmit = (values: any) => {
  console.log(values)
}
</script>
<template>
  <div class="container mx-auto my-[50px]">
    <!-- <Form novalidate @submit="onSubmit">
      <div class="flex flex-col">
        <Field type="email" name="email" placeholder="Type something here" class="p-2 border rounded-sm"
          :rules="validateEmail" />
        <ErrorMessage name="email" class="text-red-500" />
      </div>
      <div>
        <button type="submit" class="border p-2">Submit</button>
      </div>
    </Form> -->
    <!-- <hr class="my-[20px]" /> -->
    <!-- <TestFormA /> -->
    <hr class="my-20">
    <TestFormC />
    <!-- <TestFormB /> -->


  </div>
</template>
<style></style>
