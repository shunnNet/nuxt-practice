<script setup lang="ts">
import type { ButtonPassThroughOptions } from "primevue/button"
const props = defineProps({
  theme: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      return ["primary", "primary-outline"].includes(value)
    },
  },
  icon: {
    type: String,
    default: "",
  },
})
const themeClass = computed(() => {
  const diction: Record<string, string> = {
    primary:
      "bg-brand-primary border-(1px brand-primary solid) text-white border-none hover:(bg-brand-primary-dark border-(1px brand-primary-dark solid)) ",
    "primary-outline":
      "bg-white text-brand-primary border-(1px brand-primary solid) hover:bg-brand-primary-dark hover:text-white",
  }

  return diction[props.theme]
})
const pt: ButtonPassThroughOptions = {
  root: () => {
    return {
      class: [
        `${themeClass.value} flex items-center justify-center rounded-8px  transition-background-color,color duration-200  text-16px line-height-[1.5] py-12px px-24px`,
      ],
    }
  },
  loadingIcon: () => {
    return {
      class: ["mr-4px"],
    }
  },
}
const diction: Record<string, string> = {
  "chevron-down": "i-custom:chevron-down",
  "chat-outline": "i-custom:chat-outline",
  "add-circle-filled": "i-custom:add-circle-filled",
}
</script>
<template>
  <PrimeButton :pt="pt" unstyled>
    <template #icon>
      <slot name="icon">
        <i v-if="icon" :class="`${diction[icon]} square-16 mr-4px`"></i>
      </slot>
    </template>
  </PrimeButton>
</template>
<style></style>
