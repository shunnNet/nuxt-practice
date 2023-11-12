<script setup lang="ts">

</script>
<template>
  <div>
    <slot name="header">
      <div class="flex gap-4 px-4 py-2 flex-wrap">
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'index' }">Home</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'blog-good-article' }">Good Article
        </NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'admin' }">Admin</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'date-picker' }">Date Picker</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'form-test' }">Form</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'test-request' }">Test Request</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'person' }">Person</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'test' }">Test</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" :to="{ name: 'will-throw' }">Will-Throw</NuxtLink>
        <NuxtLink class="text-purple-500 rounded-sm shadow p-2" to="https://www.google.com">Google</NuxtLink>
      </div>
    </slot>
    <slot />
    <slot name="footer"> Footer Content </slot>
  </div>
</template>
