<script setup lang="ts">
const emit = defineEmits(["update:model-value"])
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
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Array, Object],
    default: "",
  },
})
const cls = [`text-14px line-height-20px mb-4px after:content-123`]
const requiredClass = `after:text-#ff595a after:test-after after:content-["*"] after:ml-4px`
if (props.required) {
  cls.push(requiredClass)
}

const finalClass = cls.join(" ")
const handleUpdateValue = (value: any) => {
  console.log(value)
  emit("update:model-value", value)
}
</script>
<template>
  <div class="flex flex-col w-full">
    <label v-if="label" :class="finalClass" :for="name">
      {{ label }}
    </label>
    <PSelect
      :options="options"
      :model-value="modelValue"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :invalid="!!error"
      @update:model-value="handleUpdateValue"
    >
    </PSelect>

    <span v-if="error" class="text-#AE170E text-12px line-hieght-18px">
      {{ error }}
    </span>
  </div>
</template>
<style></style>
