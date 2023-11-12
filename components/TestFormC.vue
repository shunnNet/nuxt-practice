<script setup lang="ts">
import consola from 'consola';

const { handleSubmit } = useForm<{ name: string, email: string }>()

const onSubmit = handleSubmit((values) => {
  console.log(values);
  values.name
})

const testSubmit = (e: Event) => {
  e.preventDefault()
  const f = e.target as HTMLFormElement
  consola.info(f.elements);
  consola.info(f.elements.email.value);
  consola.info(f.elements.name.value);
}

</script>
<template>
  <form @submit="testSubmit">
    <fieldset>
      <legend>Test Legend</legend>
      <label>
        Description:
        <input type="text" name="description">

      </label>
      <TestFormCC />
    </fieldset>
    <button type="submit">Submit</button>
  </form>
</template>
<style></style>