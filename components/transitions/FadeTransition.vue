<template>
  <Transition name="fade" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<script>

export default {
  name: 'FadeTransition'
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>