<script setup lang="ts">
import { Field } from "vee-validate";
defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  hideError: {
    type: Boolean,
    default: false
  },

  tag: { type: String, default: 'div' },

  rules: {
    type: [String, Object],
    default: ""
  }
})
</script>
<template>
  <Field :name="name" :rules="rules" v-slot="scoped">
    <Component :is="tag" class="form-group">
      <slot name="label">
        <div v-if="label" class="form-label">{{ label }}</div>
      </slot>
      <slot v-bind="scoped" />
      <slot name="error" :errors="scoped.errors" :error-message="scoped.errorMessage">
        <Transition name="zoom-in-top">
          <span v-if="!hideError && scoped.errorMessage" class="error-msg" :data-cy-error-name="name">
            {{ scoped.errorMessage }}
          </span>
        </Transition>
      </slot>
    </Component>
  </Field>
</template>
<style lang="scss">
.form-group {
  position: relative;
  flex: 1;
  width: 100%;

  &:not(:last-child) {
    margin-right: 16px;
    // margin-bottom: 16px;
  }

  .form-label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;

    &__sub {
      font-size: 12px;
      font-weight: 400;
      color: map-get($colors, dark);
      display: inline-block;
    }

    &--thin {
      font-weight: 400;

    }
  }

  .error-msg {
    position: absolute;
    bottom: -16px;
    left: 0;
  }
}

.zoom-in-top-enter-from,
.zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.zoom-in-top-enter-to,
.zoom-in-top-leave-from {
  opacity: 1;
  transform: scaleY(1);
}

.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  transition: transform .25s cubic-bezier(.23, 1, .32, 1), opacity .25s cubic-bezier(.23, 1, .32, 1);
  transform-origin: center top
}
</style>