<script setup lang="ts">
import { useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup"
import consola from "consola";

const schema = toTypedSchema(yup.object({
  name: yup.string(),
  email: yup.string().email().required(),
  requirement: yup.string().required(),
  config: yup.object({
    color: yup.string().required("color wrong")
  })

}))

const { values, defineInputBinds, defineComponentBinds, errors, meta, handleSubmit, isSubmitting, submitCount, setValues } = useForm({
  validationSchema: schema,


})
const name = defineInputBinds("name")
const email = defineInputBinds("email")
const requirement = defineComponentBinds('requirement', {
  validateOnModelUpdate: false,
  // mapProps(state) {
  //     state.
  // },
})
const color = defineInputBinds("config.color")

const onSubmit = handleSubmit(async (value) => {
  await sleep(2000)
  console.log(value);
}, ({ errors, values }) => {
  consola.info(errors, values)
})

const setCustomValues = () => {
  setValues({
    email: "emailema",
    name: "",
    requirement: "f"
  })
}
</script>
<template>
  <form class="flex flex-col gap-4" novalidate @submit="onSubmit">
    <VButton @click="setCustomValues">Set Values</VButton>
    <fieldset :disabled="isSubmitting">

      <input v-bind="name" type="text" name="name" class="p-2 border rounded-sm" placeholder="Name" />
      <input v-bind="email" type="email" name="email" class="p-2 border rounded-sm" placeholder="Email" />
      <input v-bind="color" type="color" name="color" class="p-2 border rounded-sm" placeholder="Color" />
      <VInput v-bind="requirement" name="requirement" placeholder="Requirements" />
      <CInput name="gender" placeholder="Gender" />
      <VButton type="submit">Submit</VButton>
    </fieldset>

  </form>
  <pre>{{ values }}</pre>
  <pre>{{ errors }}</pre>
  <pre>{{ meta }}</pre>
  <pre>Submitting: {{ isSubmitting }}</pre>
  <pre>Submit Count: {{ submitCount }}</pre>
</template>
