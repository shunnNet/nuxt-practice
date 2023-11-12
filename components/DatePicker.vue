<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
</script>
<template>
  <VueDatePicker v-bind="$attrs" locale="zh-TW" :enable-time-picker="false" format="yyyy-MM-dd" auto-apply>
  </VueDatePicker>
</template>