<script setup lang="ts">
import InputText from "primevue/inputtext"
import { computed } from "vue"

const props = defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  valid: {
    type: Boolean,
    default: false,
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

const cls = computed(() => {
  const base = [
    "flex items-center text-16px line-height-[1.5]  px-12px text-brand-black placeholder-#AEAEB5 border-(#dadcdd 1px) rounded-4px transition-all",
  ]
  const invalid = props.invalid ? ["!border-#ae170e"] : []
  const valid = props.valid ? ["!border-#ae170e"] : []
  const focusing = ["!hover:border-#FFA728", "!focus-within:border-#FFA728 "]

  return [base, invalid.join(" "), focusing.join(" ")].join(" ")
})
const icons: Record<string, string> = {
  "chevron-down": "i-custom:chevron-down",
  "chat-outline": "i-custom:chat-outline",
}
</script>
<template>
  <div :class="cls">
    <div
      v-if="prefixIcon"
      :class="`${icons[prefixIcon]} square-16 text-#86868f mr-8px`"
    />
    <input v-bind="$attrs" class="w-full py-10px focus:outline-0 flex-1" />
    <div
      v-if="suffixIcon"
      :class="`${icons[suffixIcon]} square-16 text-#86868f ml-8px`"
    />
    <div class="i-custom:chevron-down w-16px h-16px"></div>
  </div>
</template>
<style></style>
