<script setup lang="ts">
import consola from 'consola';
// import { useForm, Field } from 'vee-validate';
import { syncRef } from "@vueuse/core";
const email = ref('email')

const { handleSubmit, setFieldValue } = useForm({
  initialValues: {
    email: email.value,
    email2: email.value,
  }
})
const emailFieldValue = useFieldValue('email')

syncRef(emailFieldValue, email)
watch(email, () => {
  setFieldValue('email', email.value, false)
})

const onSubmit = handleSubmit((values) => {
  consola.success(values)
}, ({ errors }) => {
  consola.error(errors)
})

const handleEmailChange = ($event: string) => {
  email.value = $event
}

const onInput = () => {
  console.log("input");
}

const changeEmail = () => {
  email.value = "123"

}


</script>
<template>
  <form @submit="onSubmit">
    <button type="button" @click="changeEmail">Set Email</button>
    <Field name="email" rules="email" :validate-on-model-update="false"
      v-slot="{ errorMessage, componentField, value, handleChange }">
      <JInput v-bind="componentField" @update:model-value="handleEmailChange" placeholder="Type something here please" />
      <span class="error-msg">
        {{ errorMessage }}
      </span>
      <div>
        value: {{ value }}
      </div>
      <div>
        email: {{ email }}
      </div>
    </Field>
    <!-- <Field name="email2" rules="email" validate-on-blur :validate-on-change="false"
      v-slot="{ errorMessage, field, componentField, value, handleChange, errors, meta }">
      <input v-bind="field" class="form-input" :class="{ 'has-error': meta.validated && !meta.valid }"
        @input="handleEmailChange($event.target.value)" type="text">
    </Field> -->
    <ErrorMessage name="email2" class="error-msg" />
    <div>
      <button class="btn" type="submit">Submit</button>
    </div>

    <JFormField name="name" label="姓名" rules="required" v-slot="{ field, setErrors }">
      <input v-bind="field" class="form-input" placeholder="請輸入姓名">
      <button type="button" @click="setErrors('hello World')">Set ERRR</button>
    </JFormField>
  </form>
</template>
<style></style>