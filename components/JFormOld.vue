<script>
import { ValidationObserver } from 'vee-validate'
import { ref } from '@nuxtjs/composition-api'
import { useScroll } from '~/assets/composition/useScroll'
export default {
  emits: ['submit', 'submit-valid'],
  components: {
    ValidationObserver
  },
  props: {
    errorClass: {
      type: String,
      default: '.error-msg'
    },
    scrollToError: {
      type: Boolean,
      default: true
    },
    /** no auto validate when is false */
    autoValidate: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit, attrs }) {
    const validationObserver = ref()
    const { scrollTo } = useScroll()

    const handleSubmit = async () => {
      emit('submit')
      if (props.autoValidate) {
        const valid = await validate()
        if (valid) {
          emit('submit-valid')
        }
      }
    }

    const validate = (...args) => {
      return validationObserver.value.validate(...args).then((valid) => {
        if (!valid) {
          if (props.scrollToError) {
            setTimeout(() => {
              scrollTo(props.errorClass, 500)
            }, 0)
          }
        }
        return valid
      })
    }
    const reset = () => {
      return validationObserver.value.reset()
    }
    const setErrors = (fieldErrors = {}) => {
      return validationObserver.value.setErrors(fieldErrors)
    }

    return {
      handleSubmit,
      validationObserver,
      validate,
      reset,
      setErrors
    }
  }
}
</script>
<template>
  <ValidationObserver v-bind="$attrs" ref="validationObserver" @submit.prevent="handleSubmit()">
    <template #default="scoped">
      <!-- v-bind order is important in vue 3, make sure you put v-bind before anything -->
      <slot v-bind="scoped" :validate="validate" />
    </template>
  </ValidationObserver>
</template>