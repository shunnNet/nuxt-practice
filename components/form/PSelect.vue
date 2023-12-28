<script setup lang="ts">
import type {
  DropdownPassThroughOptionType,
  DropdownPassThroughOptions,
} from "primevue/dropdown"
const emit = defineEmits(["update:model-value"])
const componentProps = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Array, Object],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
})

const handleUpdateValue = (value: any) => {
  console.log(value)
  emit("update:model-value", value)
}
const TRANSITIONS = {
  // overlay: {
  //   enterFromClass: "h-0 ",
  //   enterActiveClass: "transition-height duration-300 ease-out overflow-hidden",
  //   enterToClass: "h-200px overflow-hidden",
  //   leaveFromClass: "h-200px overflow-hidden",
  //   leaveActiveClass: "transition-height duration-150 ease-out overflow-hidden",
  //   leaveToClass: "h-0 overflow-hidden",
  // },
  overlay: {
    enterFromClass: "opacity-0 translate-y-[-20px]",
    enterActiveClass: "transition-transform,opacity duration-150 ease-out",
    leaveActiveClass: "transition-opacity duration-150 ease-out",
    leaveToClass: "opacity-0 ",
  },
}
const pt: DropdownPassThroughOptions = {
  root: ({ props }) => ({
    class: [
      "py-12px px-10px border w-full",
      "focus-within:border-(#ff8e0d solid 1px)",
      "cursor-pointer inline-flex relative select-none",
      "bg-white border-(#dadcdd 1px) transition-colors duration-200 ease-in-out rounded-4px ",
      "hover:(border-(#ff8e0d solid 1px) bg-#eeeeee/20) focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] ",
      {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  input: ({ props }) => ({
    id: componentProps.id,
    class: [
      "cursor-pointer block flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap relative",
      "bg-transparent border-0 text-#AEAEB5",
      "bg-transparent rounded appearance-none",
      "focus:outline-none focus:shadow-none",
      { "pr-7": props.showClear },
      { "text-brand-black": !!props.modelValue },
    ],
  }),
  trigger: ({ state }) => {
    return {
      class: [
        "flex items-center transition-transform",
        {
          "text-#AEAEB5": !state.overlayVisible,
          "text-brand-black rotate-180": state.overlayVisible,
        },
      ],
    }
  },
  panel: {
    class: "shadow-[0_2px_10px_0_hsla(0,0%,89.8%,.5)] rounded-md",
  },
  wrapper: ({ state }) => {
    return {
      class: ["h-200px overflow-auto", " text-gray-700 border-0 bg-white"],
    }
  },
  list: {
    class: "list-none m-0  overflow-auto",
  },
  item: ({ context }) => ({
    class: [
      "cursor-pointer whitespace-nowrap",
      "py-6px px-12px duration-200 ",
      {
        "text-brand-black hover:(text-(brand-primary) bg-gray-200)":
          !context.focused && !context.selected,
        "bg-gray-200 text-(brand-primary)  hover:(text-primary bg-gray-200)  ":
          context.focused && !context.selected,
        "bg-gray-300 text-(brand-primary) hover:(text-(brand-primary)":
          context.focused && context.selected,
        "bg-gray-300 text-(brand-primary)":
          !context.focused && context.selected,
      },
    ],
  }),
  // itemGroup: {
  //   class: ["m-0 p-3 text-gray-800 bg-white font-bold", "cursor-auto"],
  // },
  // header: {
  //   class: [
  //     "p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg",
  //   ],
  // },
  // filterContainer: {
  //   class: "relative",
  // },
  // filterInput: {
  //   class: [
  //     "pr-7 -mr-7",
  //     "w-full",
  //     "font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none",
  //     "hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] ",
  //   ],
  // },
  // filterIcon: {
  //   class: "-mt-2 absolute top-1/2",
  // },
  // clearIcon: {
  //   class: "text-gray-500 right-12 -mt-2 absolute top-1/2",
  // },
  transition: TRANSITIONS.overlay,
}
</script>
<template>
  <PrimeDropdown
    unstyled
    :auto-option-focus="false"
    scrollHeight="200px"
    :placeholder="placeholder"
    :options="options"
    option-value="value"
    option-label="name"
    :model-value="modelValue"
    :pt="pt"
    @update:model-value="handleUpdateValue"
  >
    <template #dropdownicon>
      <div class="i-custom:chevron-down square-16"></div>
    </template>
  </PrimeDropdown>
</template>
<style></style>
