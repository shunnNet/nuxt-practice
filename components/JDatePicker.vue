<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const DatePicker = defineAsyncComponent(() =>
  import('@/components/DatePicker.vue')
)
const date = ref()

</script>
<template>
  <LocalDateInput v-model="date" ref="datepicker" class="w-300px p-3 border-box" name="test" id="test" hide-indicator
    max="2023-12-31" min="2023-12-01" v-slot="{ support, attrs }">
    <DatePicker v-if="!support" v-model="date" locale="zh-TW" :enable-time-picker="false" format="yyyy-MM-dd" auto-apply>
    </DatePicker>
  </LocalDateInput>
</template>
<style></style>