<template>
  <validation-provider #default="provider" ref="provider" :rules="rules" :tag="tag" :name="name" class="form-group"
    :vid="vid">
    <slot name="label">
      <div v-if="!$slots.label && label" class="form-label">{{ label }}</div>
    </slot>
    <slot :provider="provider" :set-error="setCustomErrorMessage" />

    <slot name="error" :errors="provider.errors">
      <transition name="zoom-in-top">
        <span v-if="!hideError && provider.errors[0]" :data-cy-error-name="name" class="error-msg">
          {{ provider.errors[0] }}
        </span>
      </transition>
    </slot>
  </validation-provider>
</template>

<script>
import { onMounted, ref, watch } from '@nuxtjs/composition-api'

export default {
  name: 'FormGroup',
  props: {
    label: { type: String, default: '' },
    rules: { type: [String, Object], default: 'required' },
    tag: { type: String, default: 'div' },
    name: { type: String, default: '' },
    vid: {
      type: String,
      default: ''
    },
    hideError: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const provider = ref(null)
    const setErrors = (err) => {
      if (!Array.isArray(err)) return
      provider.value.setErrors(err)
    }

    const setCustomErrorMessage = (message) => {
      setErrors(message ? [message] : [])
    }
    watch(
      () => props.error,
      (val) => {
        setCustomErrorMessage(val)
      }
    )
    onMounted(() => {
      setCustomErrorMessage(props.error)
    })

    return {
      setErrors,
      setCustomErrorMessage,
      provider
    }
  }
}
</script>

<style lang="scss" scoped></style>
