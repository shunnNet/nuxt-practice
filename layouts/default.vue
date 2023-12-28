<script setup lang="ts"></script>
<template>
  <div>
    <div class="text-very-cool">Hello</div>
    <slot name="header">
      <div class="i-custom:circle text-brand-primary"></div>

      <div
        class="i-mdi-alarm text-(brand-primary) hover:rotate-45 transition-transform"
      ></div>
      <div class="font-noto flex gap-4 px-4 py-2 flex-wrap bg-red:10">
        <NuxtLink class="nav-link" :to="{ name: 'components' }"
          >Components</NuxtLink
        >
        <NuxtLink class="nav-link" :to="{ name: 'date-picker' }"
          >Date Picker
        </NuxtLink>
        <NuxtLink class="nav-link fs-2 a-10" :to="{ name: 'index' }"
          >Home
        </NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'blog-good-article' }"
          >Good Article
        </NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'admin' }">Admin</NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'date-picker' }"
          >Date Picker</NuxtLink
        >
        <NuxtLink class="nav-link" :to="{ name: 'form-test' }">Form</NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'test-request' }"
          >Test Request</NuxtLink
        >
        <NuxtLink class="nav-link" :to="{ name: 'person' }">Person</NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'test' }">Test</NuxtLink>
        <NuxtLink class="nav-link" :to="{ name: 'will-throw' }"
          >Will-Throw</NuxtLink
        >
        <NuxtLink class="nav-link" to="https://www.google.com">Google</NuxtLink>
      </div>
    </slot>
    <slot />
    <!-- <slot name="footer"> Footer Content </slot> -->
  </div>
</template>
