<script setup lang="ts">
const options = ref([
  { name: "400", value: "400" },
  { name: "450", value: "450" },
  { name: "500", value: "500" },
  { name: "550", value: "550" },
  { name: "600", value: "600" },
])

const value = ref()
const TRANSITIONS = {
  overlay: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass:
      "transition-transform transition-opacity duration-150 ease-in",
    leaveActiveClass: "transition-opacity duration-150 ease-linear",
    leaveToClass: "opacity-0",
  },
}
</script>
<template>
  <PrimeDropdown
    class="mt-5"
    placeholder="請選擇潔客價位"
    :options="options"
    option-value="value"
    option-label="name"
    v-model="value"
  />
  //
  <!-- <input class="placeholder-primary" placeholder="Hello world" /> -->
</template>
<style></style>
