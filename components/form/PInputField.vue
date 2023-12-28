<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
  prefixIcon: {
    type: String,
    default: "",
  },
  suffixIcon: {
    type: String,
    default: "",
  },
})
const cls = [`text-14px line-height-20px mb-4px after:content-123`]
const requiredClass = `after:text-#ff595a after:test-after after:content-["*"] after:ml-4px`
if (props.required) {
  cls.push(requiredClass)
}

const finalClass = cls.join(" ")
</script>
<template>
  <div class="flex flex-col">
    <label v-if="label" :class="finalClass" :for="name">
      {{ label }}
    </label>

    <PInput
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :invalid="!!error"
      :prefixIcon="prefixIcon"
      :suffixIcon="suffixIcon"
    />
    <span v-if="error" class="text-#AE170E text-12px line-hieght-18px">
      {{ error }}
    </span>
  </div>
</template>
<style></style>
