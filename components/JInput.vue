<script setup lang="ts">
const emit = defineEmits(["update:modelValue", "blur", "input", "change"])

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
})
const onInput = (e: Event) => {
  const el = e.target as HTMLInputElement

  emit('input', el.value)
  emit('update:modelValue', el.value)
}
const onChange = (e: Event) => {
  const el = e.target as HTMLInputElement
  emit('change', el.value)

}

</script>
<template>
  <div>
    <input :value="modelValue" @input="onInput" @blur="$emit('blur', $event)" @change="onChange" type="text"
      class="form-input">
  </div>
</template>
<style lang="scss">
%CommonInputStyle {
  border: 1px solid #eeeeee;
  padding: 8px 16px;
  width: 100%;
  border-radius: 5px;
  transition: 0.3s all ease;
}

@mixin CommonInputExtension() {
  &.has-error {
    border-color: map-get($colors, danger);
  }

  &:disabled,
  &--disabled {
    background-color: map-get($colors, medium);
    cursor: not-allowed;
  }
}

.form-input {
  @extend %CommonInputStyle;
  @include CommonInputExtension();

  // @include breakpoint('tablet') {
  //   width: 100%;
  // }
  box-sizing: border-box;
}
</style>