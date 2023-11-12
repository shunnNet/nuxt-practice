import { defineRule } from "vee-validate"
import { email, required } from "@vee-validate/rules"

export default defineNuxtPlugin((nuxtApp) => {
  defineRule("email", email)
  defineRule("required", (value: any) => {
    return required(value) || "請輸入內容"
  })
})
