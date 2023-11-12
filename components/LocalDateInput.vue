<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  hideIndicator: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits(["update:modelValue", "change"])

const handleChange = (e: Event) => {
  if (e.target && "value" in e.target) {
    emit('update:modelValue', e.target.value)
    emit('change', e.target.value)
  }
}
const indicatorDisplay = computed(() => props.hideIndicator ? 'none' : 'unset')

const support = ref(true)
const supportShowPicker = ref(false)
onMounted(() => {
  try {
    const inputEle = document.createElement('input')
    inputEle.type = 'date'
  } catch (e) {
    support.value = false
  }

  if ('showPicker' in HTMLInputElement.prototype) {
    supportShowPicker.value = true
  }
})

</script>
<template>
  <slot :support="support" :attrs="$attrs">
    <input ref="datepicker" v-bind="$attrs" class="native-datepicker" type="date" :value="modelValue"
      @change="handleChange" pattern="\d{4}-\d{2}-\d{2}" placeholder="YYYY-MM-DD" />
  </slot>
</template>
<style>
.native-datepicker::-webkit-calendar-picker-indicator {
  display: v-bind('indicatorDisplay');
}

/* @supports selector(input::-webkit-calendar-picker-indicator) {
  body {
    color: red;
  }
} */
</style>