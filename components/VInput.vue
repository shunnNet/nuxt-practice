<script setup lang="ts">
const emit = defineEmits(["update:modelValue", "blur", "focus"])
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
})
const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const onBlur = () => {
  emit('blur')
}
const onFocus = () => { emit('focus') }
</script>

<template>
  <div>
    <input class="p-2 border rounded-sm w-full" :value="modelValue" :placeholder="placeholder" @input="onInput"
      @change="onChange" @blur="onBlur" @focus="onFocus" />
  </div>
</template>