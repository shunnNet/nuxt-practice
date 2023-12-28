<script setup lang="ts">
import type { CheckboxPassThroughOptions } from "primevue/checkbox"
defineProps({
  modelValue: {
    type: [String, Number, Boolean, Array],
    default: "",
  },
  value: {
    type: [String, Number, Boolean, Array],
    default: "",
  },
})
const checkboxPt: CheckboxPassThroughOptions = {
  root: ({ context }) => {
    return {
      class: [
        "border-(1px #dadcdd solid) rounded-4px square-16 transition-background-color,border-color duration-200",
        !!context.checked
          ? "bg-brand-primary border-(1px brand-primary solid)"
          : "bg-white border-(1px #dadcdd solid)",
      ],
    }
  },
  input: ({ props }) => ({
    class: ["w-full h-full flex items-center justify-center p-1px"],
  }),
  icon: ({ context }) => ({
    class: ["text-white"],
  }),
}
</script>
<template>
  <div class="flex items-center select-none cursor-pointer">
    <PrimeCheckbox
      unstyled
      inputId="save"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
      :value="value"
      :pt="checkboxPt"
    ></PrimeCheckbox>
    <label
      for="save"
      class="ml-8px text-14px line-height-20px text-brand-black cursor-pointer"
    >
      儲存為常用地址，方便下次預訂
    </label>
  </div>
</template>
<style></style>
