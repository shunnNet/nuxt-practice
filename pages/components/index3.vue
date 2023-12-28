<script setup lang="ts">
const options = ref([
  { name: "400", value: "400" },
  { name: "450", value: "450" },
  { name: "500", value: "500" },
  { name: "550", value: "550" },
  { name: "600", value: "600" },
])

const value = ref()
</script>
<template>
  <PrimeDropdown
    class="mt-5"
    placeholder="請選擇潔客價位"
    :options="options"
    option-value="value"
    option-label="name"
    v-model="value"
    :pt="{
      root: {
        class: `w-300px 
          cursor-pointer 
          text-#9b9b9b
          border-(#eeeeee solid 1px) 
          focus-within:border-(#ff8e0d solid 1px) 
          
          flex items-center
          rounded-5px 
          transition-all 
          duration-300
          py-8px px-16px
          `,
      },
      input: (args) => {
        // const selectedClass = context.selected ? 'text-#3e4459' : ''
        return {
          class: ['flex-1 focus:outline-none'],
        }
      },
      trigger: {
        // class: 'text-#eeeeee',
      },
      panel: {
        class: `shadow-[0_2px_10px_0_hsla(0,0%,89.8%,.5)] rounded-5px`,
      },
      list: {
        class: 'list-none p-0 m-0',
      },
      item: (args) => {
        console.log(args)
        return {
          class: 'py-6px px-12px hover:text-(brand-primary) cursor-pointer',
        }
      },
    }"
  />
  <!-- <input class="placeholder-primary" placeholder="Hello world" /> -->
</template>
<style></style>
